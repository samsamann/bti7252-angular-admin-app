import { Component, OnInit, Input } from '@angular/core';
import { MapperPageContent } from '../mapper-page-content';
import { MatTableDataSource } from '@angular/material';


@Component({
  selector: 'app-sensor--mobile',
  templateUrl: './sensor-mapper-mobile.component.html',
  styleUrls: ['./sensor-mapper-mobile.component.scss']
})

export class SensorMapperMobileComponent implements OnInit, MapperPageContent  {

  displayedColumns = ['name'];
  sensorDataSource: MatTableDataSource<String>;

  @Input()
  sensors: string[];

  constructor() {
  }

  sensorClicked(sensor) {
    alert(sensor);
  }

  ngOnInit() {
    this.sensorDataSource = new MatTableDataSource(this.sensors);
  }

}

export interface Sensor {
  name: string;
}

