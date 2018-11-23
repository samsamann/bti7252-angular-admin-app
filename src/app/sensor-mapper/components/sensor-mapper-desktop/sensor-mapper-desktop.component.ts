import { Component, Input, OnInit } from '@angular/core';

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
export class SensorMapperDesktopComponent implements OnInit {

  @Input()
  public sensors: number[];

  constructor() {
    this.sensors = [1, 2, 3, 4, 5, 6, 7, 8];
  }

  ngOnInit() {
  }
}
