import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import { fromEvent } from 'rxjs';
import { debounceTime, distinctUntilChanged, filter, map } from 'rxjs/operators';
import { Sensor } from '../sensor-mapper-mobile/sensor-mapper-mobile.component';

@Component({
  selector: 'app-sensor-filter',
  template: `
    <mat-form-field>
      <input #input matInput placeholder="Search...">
      <mat-label><mat-icon>search</mat-icon></mat-label>
    </mat-form-field>
  `,
  styles: []
})
export class SensorFilterComponent implements OnInit {

  @Input()
  sensors: Sensor[];

  @Output()
  filteredSensors: EventEmitter<Sensor[]>;

  @ViewChild('input')
  inputEl: ElementRef;

  constructor() {
    this.filteredSensors = new EventEmitter<Sensor[]>();
  }

  ngOnInit() {
    const typeahead = fromEvent(this.inputEl.nativeElement, 'input').pipe(
      map((e: KeyboardEvent) => (<HTMLInputElement>e.target).value),
      filter(text => text.length > 2 || text.length === 0),
      debounceTime(400),
      distinctUntilChanged()
    );

    typeahead.subscribe(text => {
      if (text === '') {
        this.filteredSensors.emit(this.sensors);
      } else {
        this.filteredSensors.emit(this.sensors.filter(sensor => sensor.name.includes(text)));
      }
    });
  }

}
