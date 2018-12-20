import { Component, Input, OnInit } from '@angular/core';
import { MapperPageContent } from '../mapper-page-content';

import { Sensor } from ".././sensor-mapper-mobile/sensor-mapper-mobile.component";


@Component({
  selector: 'app-sensor-mapper-desktop',
  template: `
    <div class="cards">
      <ng-container *ngFor="let sensor of sensors">
        <app-sensor-card [sensor]="sensor" class="card"></app-sensor-card>
      </ng-container>
    </div>
  `,
  styles: [`
    .cards {
      display: flex;
      justify-content: flex-start;
      align-content: space-around;
      flex-wrap: wrap;
    }
    .card {
      min-width: 150px;
      margin-left: 1.0em;
      margin-bottom: 1.0em;
    }
  `]
})
export class SensorMapperDesktopComponent implements OnInit, MapperPageContent  {

  @Input()
  public sensors: Sensor[];


  constructor() {}

  ngOnInit() {
  }
}
