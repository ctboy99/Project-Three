// @RH_RANTWORKS
// Default AngularCLI component file.

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor() { /** Creates the navigation bar component. */  }

  ngOnInit(): void {
  }

}
