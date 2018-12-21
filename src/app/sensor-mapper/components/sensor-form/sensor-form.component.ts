import { Component, Input, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Sensor } from '../../services/sensor.service';

@Component({
  selector: 'app-sensor-form',
  templateUrl: './sensor-form.component.html',
  styleUrls: ['./sensor-form.component.scss']
})
export class SensorFormComponent implements OnInit {

  @Input()
  public sensor: Sensor;

  constructor(private location: Location) { }

  ngOnInit() {
  }

  saveForm() {
    console.log("save");
    this.location.back();
  }

  cancelForm() {
    this.location.back();
  }
}
