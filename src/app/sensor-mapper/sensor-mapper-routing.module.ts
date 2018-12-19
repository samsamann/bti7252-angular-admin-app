import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MapperPageComponent } from './components/mapper-page/mapper-page.component';
import { SensorFormComponent } from './components/sensor-form/sensor-form.component';

const routes: Routes = [
  {
    path: 'form',
    component: SensorFormComponent,
    outlet: 'sidebar'
  },
  {
    path: 'main',
    component: MapperPageComponent,
  },
  {
    path: '',
    pathMatch : 'full',
    redirectTo: 'main'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)]
})
export class SensorMapperRoutingModule { }
