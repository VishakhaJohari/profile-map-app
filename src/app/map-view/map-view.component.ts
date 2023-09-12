// src/app/map-view/map-view.component.ts
import { Component, AfterViewInit, ElementRef, NgZone } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-map-view',
  templateUrl: './map-view.component.html',
  styleUrls: ['./map-view.component.css'],
})
export class MapViewComponent implements AfterViewInit {
  constructor(
    private route: ActivatedRoute,
    private elementRef: ElementRef,
    private ngZone: NgZone
  ) { }

  ngAfterViewInit() {
    this.route.queryParams.subscribe((queryParams) => {
      const profile = JSON.parse(queryParams['profile']);

      // Get the native element for the map using ElementRef
      const mapDiv: HTMLElement | null = this.elementRef.nativeElement.querySelector('#map');

      // Check if mapDiv is not null before creating the map
      if (mapDiv) {
        // Create a map and set its initial options (center and zoom)
        const map = new google.maps.Map(mapDiv, {
          center: { lat: profile.lat, lng: profile.lng }, // Default center
          zoom: 10, // Default zoom level
        });

        // Use geocoding to convert the profile's address to coordinates
        const geocoder = new (window as any).google.maps.Geocoder(); // Direct reference to Geocoder

        // Use geocoding to convert the profile's address to coordinates
        geocoder.geocode({ address: profile.address }, (results: any[], status: string) => {
          if (status === 'OK' && results[0]) {
            const marker = new google.maps.Marker({
              position: results[0].geometry.location,
              map: map,
              title: profile.name,
            });
          } else {
            console.error(`Geocode was not successful for profile: ${profile.name}`);
          }
        });
      }
    });
  }
}
