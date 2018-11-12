import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  routes: {
    name: string;
    path: string;
    icon?: string;
  }[];

  constructor() {
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
}
