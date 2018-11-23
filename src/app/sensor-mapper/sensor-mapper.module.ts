import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';

import { SensorMapperRoutingModule } from './sensor-mapper-routing.module';
import {SharedModule} from '../shared/shared.module';

import { MapperPageComponent } from './components/mapper-page/mapper-page.component';
import { SensorCardComponent } from './components/sensor-card/sensor-card.component';
import { SensorMapperDesktopComponent } from './components/sensor-mapper-desktop/sensor-mapper-desktop.component';


@NgModule({
  declarations: [
    MapperPageComponent,
    SensorCardComponent,
    SensorMapperDesktopComponent
  ],
  imports: [
    CommonModule,
    SensorMapperRoutingModule,
    SharedModule
  ]
})
export class SensorMapperModule { }
