import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
@Component({
  selector: 'app-skip-link',
  standalone: true,
  imports: [],
  templateUrl: './skip-link.component.html',
  styleUrl: './skip-link.component.css'
})
export class SkipLinkComponent {

  skipLink: string = '';

  constructor(private router: Router) {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        const currentRoute = this.router.routerState.snapshot.root.firstChild?.url[0].path;
        this.updateSkipLink(currentRoute);
      });
  }

  private updateSkipLink(route: string | undefined) {
    if (route === 'ausstellungen') {
      this.skipLink = '#ausstellungen-content';
    } else if (route === 'kontakt') {
      this.skipLink = '#kontakt-content';
    } else {
      this.skipLink = '#home-content'; // Standardfall
    }
  }


}
