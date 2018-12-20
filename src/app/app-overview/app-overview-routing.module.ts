import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OverviewPageComponent } from './overview-page/overview-page.component';

const routes: Routes = [
  {
    path: 'main',
    component: OverviewPageComponent,
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
export class AppOverviewRoutingModule { }
