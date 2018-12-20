import { Component, OnInit, ViewChild, ComponentFactoryResolver, } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

import { MapperPageContent } from '../mapper-page-content';
import { MapperPageContentDirective } from '../mapper-page-content.directive';
import { SensorMapperMobileComponent } from '../sensor-mapper-mobile/sensor-mapper-mobile.component';
import { SensorMapperDesktopComponent } from '../sensor-mapper-desktop/sensor-mapper-desktop.component';

import { SensorService } from '../../services/sensor.service';

import { Observable } from "rxjs";

interface Sensor {
  id: string;
  name:string;
  info:string;
}


@Component({
  selector: 'app-mapper-page',
  templateUrl: './mapper-page.component.html',
  styleUrls: ['./mapper-page.component.scss']
})

export class MapperPageComponent implements OnInit {

  @ViewChild(MapperPageContentDirective)
  contentHost: MapperPageContentDirective;

  sensors: Sensor[];

  private currentComp: MapperPageContent;

  constructor(private componentFactoryResolver: ComponentFactoryResolver, private breakpoint: BreakpointObserver, private sensorService: SensorService) {
  }

  ngOnInit() {
    this.breakpoint.observe([
      Breakpoints.Small,
      Breakpoints.XSmall
    ]).subscribe(result => {
        if (result.matches) {
          this.addComponent(SensorMapperMobileComponent);
        } else {
          this.addComponent(SensorMapperDesktopComponent);
        }
    });
    this.sensorService.getSensors().subscribe(sensors => this.sensors = sensors);
  }

  filtered(event: Sensor[]) {
    this.currentComp.sensors = event;
  }

  private addComponent(component: any) {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(component);
    const viewContainerRef = this.contentHost.viewContainerRef;
    viewContainerRef.clear();

    this.currentComp = <MapperPageContent>viewContainerRef.createComponent(componentFactory).instance;
    this.currentComp.sensors = this.sensors;
  }
}
