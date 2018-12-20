import { HttpClient, HttpEventType, HttpHeaders, HttpParams, HttpRequest} from "@angular/common/http";
import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { tap, map } from 'rxjs/operators';

import { SensorMapperModule } from '../sensor-mapper.module';

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

  host: String = "http://127.0.0.1:3000"

  constructor(private httpClient:HttpClient) { }

  getSensors() : Observable<Sensor[]> {
    //const params = new HttpParams({fromString: '_page=1&_limit=1'});

    const params = new HttpParams().set('_page', "1")
                                   .set('_limit', "3");
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    const options = { params: params, headers: headers };

    this.sensors = this.httpClient.get<Sensor[]>(this.host + '/sensors', options);
    return this.sensors;
  }

  //todo
  //deleteSensor() {}
  //patch update sensor
}
