import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MapperPageComponent } from './components/mapper-page/mapper-page.component';

const routes: Routes = [
  {
    path: '',
    component: MapperPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)]
})
export class SensorMapperRoutingModule { }
