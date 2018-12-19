import { Component, OnInit, Input } from '@angular/core';
import { MapperPageContent } from '../mapper-page-content';
import { MatTableDataSource } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';


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

  constructor(private router: Router, private route: ActivatedRoute) {
  }

  sensorClicked(sensor) {
    this.router.navigate(['..', {outlets: {sidebar: 'form'}}], { relativeTo: this.route });
  }

  ngOnInit() {
    this.sensorDataSource = new MatTableDataSource(this.sensors);
  }

}

export interface Sensor {
  name: string;
}

