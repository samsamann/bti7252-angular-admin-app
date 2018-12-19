import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppOverviewRoutingModule } from './app-overview-routing.module';

import { OverviewPageComponent } from './overview-page/overview-page.component';

@NgModule({
  declarations: [
    OverviewPageComponent
  ],
  imports: [
    CommonModule,
    AppOverviewRoutingModule
  ]
})
export class AppOverviewModule { }
