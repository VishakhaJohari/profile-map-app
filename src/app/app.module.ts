import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileListComponent } from './profile-list/profile-list.component';
import { MapViewComponent } from './map-view/map-view.component';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { ProfileDetailsComponent } from './profile-details/profile-details.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: ProfileListComponent }, // Default route
  // Add more routes here for other components if needed
];

@NgModule({
  declarations: [
    AppComponent,
    ProfileListComponent,
    MapViewComponent,
    AdminPanelComponent,
    ProfileDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
