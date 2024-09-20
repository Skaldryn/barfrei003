import { Component } from '@angular/core';
import {Router, RouterLink, RouterLinkActive} from "@angular/router";

import { NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';


@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {


  // Versuch

  //constructor(private router: Router) {}
/*
  getSkipLink(): string {
    const currentRoute = this.router.url;

    // Dynamisch den Skiplink auf Basis der Route setzen
    if (currentRoute.includes('ausstellungen')) {
      return '#ausstellungen-content';
    } else if (currentRoute.includes('kontakt')) {
      return '#kontakt-content';
    } else {
      return '#home-content'; // Default: Home
    }
  }

 */









}
