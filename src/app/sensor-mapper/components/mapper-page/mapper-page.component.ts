import { Component, OnInit, ViewChild, ComponentFactoryResolver, } from '@angular/core';
import { MapperPageContent } from '../mapper-page-content';
import { MapperPageContentDirective } from './../mapper-page-content.directive';
import { SensorMapperModule } from '../../sensor-mapper.module';
import { SensorMapperMobileComponent } from '../sensor-mapper-mobile/sensor-mapper-mobile.component';
import { SensorMapperDesktopComponent } from '../sensor-mapper-desktop/sensor-mapper-desktop.component';

@Component({
  selector: 'app-mapper-page',
  templateUrl: './mapper-page.component.html',
  styleUrls: ['./mapper-page.component.scss']
})

export class MapperPageComponent implements OnInit {

  @ViewChild(MapperPageContentDirective)
  contentHost: MapperPageContentDirective;

  private isMobileResolution: boolean;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) {
    console.log(window.innerWidth);
    this.isMobileResolution = (window.innerWidth < 768) ? true : false;
  }

  addComponent(component: any) {
    let componentFactory = this.componentFactoryResolver.resolveComponentFactory(component);
    console.log(componentFactory);
    let viewContainerRef = this.contentHost.viewContainerRef;
    viewContainerRef.clear();

    let componentRef = viewContainerRef.createComponent(componentFactory);
    (<MapperPageContent>componentRef.instance).sensors = [1,2,3,4,5];
  }

  ngOnInit() {
    if (this.isMobileResolution) {
      this.addComponent(SensorMapperMobileComponent);
    } else {
      this.addComponent(SensorMapperDesktopComponent);
    }
  }
}
