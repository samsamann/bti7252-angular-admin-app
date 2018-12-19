import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppOverviewRoutingModule } from './app-overview-routing.module';
import { SharedModule } from '../shared/shared.module';

import { OverviewPageComponent } from './overview-page/overview-page.component';
import { VentilatorAppComponent } from './components/ventilator-app/ventilator-app.component';

@NgModule({
  declarations: [
    OverviewPageComponent,
    VentilatorAppComponent
  ],
  imports: [
    CommonModule,
    AppOverviewRoutingModule,
    SharedModule
  ]
})
export class AppOverviewModule { }
