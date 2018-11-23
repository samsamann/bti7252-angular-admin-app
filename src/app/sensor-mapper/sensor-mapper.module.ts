import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SensorMapperRoutingModule } from './sensor-mapper-routing.module';

import { MapperPageComponent } from './components/mapper-page/mapper-page.component';
import { SensorMapperMobileComponent } from './components/sensor-mapper-mobile/sensor-mapper-mobile.component';
import { MapperPageContentDirective } from './components/mapper-page-content.directive';

@NgModule({
  declarations: [
    MapperPageComponent,
    SensorMapperMobileComponent,
    MapperPageContentDirective
  ],
  entryComponents: [ SensorMapperMobileComponent ],
  imports: [
    CommonModule,
    SensorMapperRoutingModule
  ]
})
export class SensorMapperModule { }
