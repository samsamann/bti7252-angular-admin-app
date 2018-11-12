import { NgModule } from '@angular/core';

import { SensorMapperRoutingModule } from './sensor-mapper-routing.module';

import { MapperPageComponent } from './components/mapper-page/mapper-page.component';

@NgModule({
  declarations: [
    MapperPageComponent
  ],
  imports: [
    SensorMapperRoutingModule
  ]
})
export class SensorMapperModule { }
