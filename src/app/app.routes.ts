//import { Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AusstellungenComponent } from './ausstellungen/ausstellungen.component';
import { KontaktComponent } from './kontakt/kontakt.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ReactiveFormsModule} from "@angular/forms";



export const routes: Routes = [

  {path: "kontakt",
    component: KontaktComponent},

  {path: "ausstellungen",
    component: AusstellungenComponent},

  {path: "",
    component: HomeComponent,
    pathMatch: 'full'}



];



@NgModule({
  imports: [RouterModule.forRoot(routes,

   // {
   // anchorScrolling: 'enabled', // Enables anchor scrolling
 // }

  ), ReactiveFormsModule],


  exports: [RouterModule]
})
export class AppRoutingModule { }
