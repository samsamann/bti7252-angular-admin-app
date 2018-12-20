import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-sensor-card',
  templateUrl: './sensor-card.component.html',
  styles: []
})
export class SensorCardComponent implements OnInit {

  @Input()
  public sensor: number;

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
  }

  editSensorData() {
    this.router.navigate(['..', {outlets: {sidebar: 'form'}}], { relativeTo: this.route });
  }
}
