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
  providedIn: SensorMapperModule
})
export class SensorService {

  courses: Observable<Sensor[]>;

  host: String = "https://angular-http-guide.firebaseio.com"

  constructor(private http:HttpClient) { }

  getSensors() : [Sensor] {

    const params = new HttpParams()
           .set('orderBy', '"$key"')
           .set('limitToFirst', "1");

    const headers = new HttpHeaders().set("X-CustomHeader", "custom header value");

    this.courses = this.http
        .get(
          this.host + "/courses.json",
          {params: params}).pipe(tap(console.log));
        //.map(data => _.values(data));
        //https://stackoverflow.com/questions/50209119/property-do-does-not-exist-on-type-observableiproduct

        return [{id:"",name:"",info:""}]
  }

}
