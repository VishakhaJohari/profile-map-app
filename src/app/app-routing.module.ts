// src/app/app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileListComponent } from './profile-list/profile-list.component';
import { MapViewComponent } from './map-view/map-view.component';

const routes: Routes = [
  { path: '', component: ProfileListComponent },
  { path: 'map', component: MapViewComponent },
  // Add more routes as needed
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
