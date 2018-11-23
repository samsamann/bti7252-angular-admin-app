import { Component, OnInit, ViewChild, ComponentFactoryResolver, } from '@angular/core';
import { MapperPageContent } from '../mapper-page-content';
import { MapperPageContentDirective } from './../mapper-page-content.directive';
import { SensorMapperModule } from '../../sensor-mapper.module';
import { SensorMapperMobileComponent } from '../sensor-mapper-mobile/sensor-mapper-mobile.component';

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
    if (window.innerWidth < 768) {
      this.isMobileResolution = true;

    } else {
      this.isMobileResolution = false;
    }
  }

  addMobileComponent() {
    let componentFactory = this.componentFactoryResolver.resolveComponentFactory(SensorMapperMobileComponent);
    console.log(componentFactory);
    let viewContainerRef = this.contentHost.viewContainerRef;
    viewContainerRef.clear();

    let componentRef = viewContainerRef.createComponent(componentFactory);
    (<MapperPageContent>componentRef.instance).data = ["1", "2", "3"];
  }

  ngOnInit() {
    if (this.isMobileResolution) {
      this.addMobileComponent();
    } else {
      console.log("desktop");
    }
  }
}
