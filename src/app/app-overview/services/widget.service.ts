import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {config, Observable, timer} from 'rxjs';
import { flatMap, retry} from 'rxjs/operators';

import { environment } from '../../../environments/environment';
import {Config, Widget} from './model';

@Injectable({
  providedIn: 'root'
})
export class WidgetService {

  private readonly WIDGET_URL = '/widget';

  private readonly EVENT_URL = '/event';

  private updateTimer: Observable;

  constructor(private http: HttpClient) {}

  public getWidget(name: string): Observable<Widget> {
    const headers = new HttpHeaders().set('Accept', 'application/json');
    return this.http.get<Widget[]>(environment.apiUrl + this.WIDGET_URL, { headers: headers})
      .pipe(
        retry(3),
        flatMap((value => value.filter(widget => widget.name === name))),
      );
  }

  public saveThreshold(threshold: number, widget: Widget) {
    this.http.post(
      environment.apiUrl + this.WIDGET_URL + '/' + widget._id + 'config',
      new Config('threshold', <string> threshold),
      { headers: new HttpHeaders().set('Content-Type', 'application/json')}
    );
  }

  public sendEvent(event: string, widget: Widget) {
    widget.asset.forEach(asset => {
      const eventBody = {
        _id: asset._id,
        tid: asset.tid,
        name: event
      };
      this.http.put(environment.apiUrl + this.EVENT_URL, eventBody);
    });
  }
}
