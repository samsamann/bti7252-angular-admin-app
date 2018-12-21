import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Sensor } from '../../services/sensor.service';

@Component({
  selector: 'app-sensor-card',
  templateUrl: './sensor-card.component.html',
  styles: []
})
export class SensorCardComponent implements OnInit {

  @Input()
  public sensor: Sensor;

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
  }

  editSensorData() {
    this.router.navigate(['..', {outlets: {sidebar: 'form'}}, "10"], { relativeTo: this.route } );
  }
}
