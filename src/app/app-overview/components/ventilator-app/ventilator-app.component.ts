import { Component, OnDestroy, OnInit } from '@angular/core';
import { WidgetService } from '../../services/widget.service';
import { Widget } from '../../services/model';
import { Subscription, timer } from 'rxjs';
import { MatSlideToggleChange } from '@angular/material';

@Component({
  selector: 'app-ventilator-app',
  templateUrl: './ventilator-app.component.html',
  styles: []
})
export class VentilatorAppComponent implements OnInit, OnDestroy {

  readonly WIDGET_NAME = 'string';

  public thresholdValue;
  public ventilatorOn: boolean;

  private widget: Widget;

  private updateTimer: Subscription;

  constructor(private widgetService: WidgetService) {}

  ngOnInit() {
    this.updateWidget();
    this.updateTimer = timer(1000, 2000).subscribe(() => this.updateWidget());
  }

  ngOnDestroy(): void {
    this.updateTimer.unsubscribe();
  }

  public saveThreshold() {
    this.widgetService.saveThreshold(this.thresholdValue, this.widget);
  }

  public changeOnOff(change: MatSlideToggleChange) {
    let state = 'OFF';
    if (change.checked) {
      state = 'ON';
    }
    this.sendEvent(state);
  }

  private sendEvent(event: string) {
    this.widgetService.sendEvent(event, this.widget);
  }

  private updateWidget() {
    this.widgetService.getWidget(this.WIDGET_NAME).subscribe(widget => {
      this.widget = widget;
      if (this.widget) {
        this.thresholdValue = widget.config.find(config => config.key === 'threshold').value;
      }
    });
  }
}
