import { Component } from '@angular/core';
import {NavigationEnd, Router, RouterOutlet} from '@angular/router';
import {NavComponent} from "./nav/nav.component";
import {FooterComponent} from "./footer/footer.component";
import {SkipLinkComponent} from "./skip-link/skip-link.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavComponent, FooterComponent, SkipLinkComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'BarFreiFrontend002';

/*
  currentUrl: string = '';

  constructor(private router: Router) {
    // Subscribe to router events to capture the current URL
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        // Set the current URL, ignoring query parameters or fragments
        this.currentUrl = event.urlAfterRedirects.split('#')[0];
      }
    });
  }

 */
  skipToMainContent(event: MouseEvent) {
    event.preventDefault(); // Prevent the default anchor behavior
    const mainContent = document.getElementById('main-content');
    if (mainContent) {
      mainContent.scrollIntoView({ behavior: 'smooth' });
    }
  }




}
