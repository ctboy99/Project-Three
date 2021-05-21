/** @RH_RANTWORKS */
/** Default AngularCLI component file. */

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-spotify',
  templateUrl: './spotify.component.html',
  styleUrls: ['./spotify.component.css']
})
export class SpotifyComponent implements OnInit {

  constructor() { /** Creates the spotify component. */ }

  ngOnInit(): void {
  }

}
