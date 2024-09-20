import { Component } from '@angular/core';
import {RouterLink, RouterLinkActive} from "@angular/router";

@Component({
  selector: 'app-ausstellungen',
  standalone: true,
    imports: [
        RouterLink,
        RouterLinkActive
    ],
  templateUrl: './ausstellungen.component.html',
  styleUrl: './ausstellungen.component.css'
})
export class AusstellungenComponent {

}
