import {Component, Input, OnInit} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-sensor-card',
  templateUrl: './sensor-card.component.html',
  styles: [],
  animations: [
    trigger('flipState', [
      state('active', style({
        transform: 'rotateY(179.9deg)'
      })),
      state('inactive', style({
        transform: 'rotateY(0)'
      })),
      transition('active => inactive', animate('500ms ease-out')),
      transition('inactive => active', animate('500ms ease-in'))
    ])
  ]
})
export class SensorCardComponent implements OnInit {

  @Input()
  public sensor: number;

  public flip = 'inactive';

  constructor() { }

  ngOnInit() {
  }

  toggleFlip() {
    console.log(this.flip);
    this.flip = (this.flip === 'inactive') ? 'active' : 'inactive';
  }
}
