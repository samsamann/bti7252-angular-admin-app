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
  sensorDataSource = new MatTableDataSource(ELEMENT_DATA);

  @Input()
  sensors: number[];

  constructor() {
  }

  sensorClicked(sensor) {
    alert(sensor.name);
  }

  ngOnInit() {
  }

}

export interface Sensor {
  name: string;
}

const ELEMENT_DATA: Sensor[] = [
  { name: 'Sensor1'},
  { name: 'Sensor2'},
  { name: 'Sensor3'},
  { name: 'Sensor4'},
  { name: 'Sensor5'}
]
