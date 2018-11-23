import { Component, OnInit, Input } from '@angular/core';
import { MapperPageContent } from '../mapper-page-content';

@Component({
  selector: 'app-sensor--mobile',
  templateUrl: './sensor-mapper-mobile.component.html',
  styleUrls: ['./sensor-mapper-mobile.component.scss']
})
export class SensorMapperMobileComponent implements OnInit, MapperPageContent  {

  @Input()
  sensors: string[];

  constructor() { }

  ngOnInit() {
  }

}
