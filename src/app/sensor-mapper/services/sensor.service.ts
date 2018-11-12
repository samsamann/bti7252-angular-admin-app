import { Injectable } from '@angular/core';

import { SensorMapperModule } from '../sensor-mapper.module';

@Injectable({
  providedIn: SensorMapperModule
})
export class SensorService {

  constructor() { }
}
