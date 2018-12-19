import { Location } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  @ViewChild('rightSidebar')
  private rightSidenav: MatSidenav;

  public routes: {
    name: string;
    path: string;
    icon?: string;
  }[];

  constructor(private location: Location) {
    this.routes = [
      {
        name: 'Home',
        path: ''
      },
      {
        name: 'Sensor Mapper',
        path: 'mapper'
      }
    ];
  }

  public navigateBack() {
    if (this.rightSidenav.opened) {
      this.location.back();
    }
  }
}
