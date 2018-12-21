import { HttpClient, HttpEventType, HttpHeaders, HttpParams, HttpRequest} from "@angular/common/http";
import { Injectable } from '@angular/core';
import { Observable } from "rxjs";

import { environment } from '../../../environments/environment';

interface Sensor {
  id: string;
  name:string;
  info:string;
}

@Injectable({
  providedIn: 'root'
})
export class SensorService {

  sensors: Observable<Sensor[]>;

  constructor(private httpClient: HttpClient) { }

  getSensors() : Observable<Sensor[]> {
    //const params = new HttpParams({fromString: '_page=1&_limit=1'});

    const params = new HttpParams().set('_page', "1")
                                   .set('_limit', "3");
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    const options = { params: params, headers: headers };

    this.sensors = this.httpClient.get<Sensor[]>(environment.apiUrl + '/sensors', options);
    return this.sensors;
  }

  //todo
  //deleteSensor() {}
  //patch update sensor
}
