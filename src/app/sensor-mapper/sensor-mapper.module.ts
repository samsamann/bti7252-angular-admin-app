import { NgModule } from '@angular/core';

import { SensorMapperRoutingModule } from './sensor-mapper-routing.module';
import { SharedModule } from '../shared/shared.module';

import { MapperPageComponent } from './components/mapper-page/mapper-page.component';
import { SensorFilterComponent } from './components/sensor-filter/sensor-filter.component';
import { SensorFilterComponent } from './components/sensor-filter/sensor-filter.component';

@NgModule({
  declarations: [
    MapperPageComponent,
    SensorFilterComponent
  ],
  imports: [
    SensorMapperRoutingModule,
    SharedModule
  ]
})
export class SensorMapperModule { }
