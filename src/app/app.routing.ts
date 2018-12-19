import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { HomePageComponent } from './common/components/home/home-page.component';

const routes: Routes = [
  {
    path: 'mapper',
    loadChildren: './sensor-mapper/sensor-mapper.module#SensorMapperModule',
  },
  {
    path: '',
    pathMatch: 'full',
    component: HomePageComponent
  }
];

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
