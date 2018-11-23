import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import { fromEvent } from 'rxjs';
import { debounceTime, distinctUntilChanged, filter, map } from 'rxjs/operators';

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
  sensors: string[];

  @ViewChild('input')
  inputEl: ElementRef;

  constructor() { }

  ngOnInit() {
    const typeahead = fromEvent(this.inputEl.nativeElement, 'input').pipe(
      map((e: KeyboardEvent) => (<HTMLInputElement>e.target).value),
      filter(text => text.length > 2),
      debounceTime(400),
      distinctUntilChanged()
    );

    typeahead.subscribe(text => this.sensors.filter(sensor => sensor === text));
  }

}
