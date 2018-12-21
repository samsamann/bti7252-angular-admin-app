import { Component, OnInit, Input } from '@angular/core';
import { MapperPageContent } from '../mapper-page-content';
import { MatTableDataSource } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';

import { Sensor } from '../../services/sensor.service';


@Component({
  selector: 'app-sensor--mobile',
  templateUrl: './sensor-mapper-mobile.component.html',
  styleUrls: ['./sensor-mapper-mobile.component.scss']
})

export class SensorMapperMobileComponent implements OnInit, MapperPageContent  {

  displayedColumns = ['name'];
  sensorDataSource: MatTableDataSource<Sensor>;

  @Input()
  public sensors: Sensor[];

  constructor(private router: Router, private route: ActivatedRoute) {
  }

  sensorClicked(sensor) {
    this.router.navigate(['..', {outlets: {sidebar: 'form'}}], { relativeTo: this.route });
  }

  ngOnInit() {
    this.sensorDataSource = new MatTableDataSource(this.sensors);
  }

}
