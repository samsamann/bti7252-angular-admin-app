import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home-page.component.html'
})
export class HomePageComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
  }

  navigate(): void {
    this.router.navigate([{outlets: {sidebar: 'sidebar'}}]);
  }
}
