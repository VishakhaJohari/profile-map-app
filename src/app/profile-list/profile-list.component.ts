// src/app/profile-list/profile-list.component.ts
import { Component } from '@angular/core';
import { profiles } from '../mock-data';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile-list',
  templateUrl: './profile-list.component.html',
  styleUrls: ['./profile-list.component.css'],
})
export class ProfileListComponent {
  profiles = profiles;

  constructor(private router: Router) { }

  showProfileOnMap(profile: any) {
    // Navigate to the map view and pass the profile data via query params
    this.router.navigate(['/map'], { queryParams: { profile: JSON.stringify(profile) } });
  }
}
