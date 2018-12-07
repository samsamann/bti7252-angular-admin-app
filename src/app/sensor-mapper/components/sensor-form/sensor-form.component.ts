import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';


@Component({
  selector: 'app-sensor-form',
  templateUrl: './sensor-form.component.html',
  styleUrls: ['./sensor-form.component.scss']
})
export class SensorFormComponent implements OnInit {

  constructor(private location: Location) { }

  ngOnInit() {
  }

  saveForm() {
    console.log("save");
  }

  cancelForm() {
    this.location.back();
    console.log("cancel");
  }
}
