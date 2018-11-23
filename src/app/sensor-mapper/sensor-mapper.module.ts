import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SensorMapperRoutingModule } from './sensor-mapper-routing.module';
import { SharedModule } from '../shared/shared.module';

import { MapperPageComponent } from './components/mapper-page/mapper-page.component';
import { SensorMapperMobileComponent } from './components/sensor-mapper-mobile/sensor-mapper-mobile.component';
import { MapperPageContentDirective } from './components/mapper-page-content.directive';
import { SensorCardComponent } from './components/sensor-card/sensor-card.component';
import { SensorMapperDesktopComponent } from './components/sensor-mapper-desktop/sensor-mapper-desktop.component';
import { SensorFilterComponent } from './components/sensor-filter/sensor-filter.component';

@NgModule({
  declarations: [
    MapperPageComponent,
    SensorMapperMobileComponent,
    MapperPageContentDirective,
    SensorCardComponent,
    SensorMapperDesktopComponent,
    MapperPageComponent,
    SensorFilterComponent
  ],
  entryComponents: [ SensorMapperMobileComponent, SensorMapperDesktopComponent ],
  imports: [
    CommonModule,
    SensorMapperRoutingModule,
    SharedModule
  ]
})
export class SensorMapperModule { }
