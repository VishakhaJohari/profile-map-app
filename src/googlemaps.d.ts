// src/googlemaps.d.ts

declare namespace google.maps {
    class Map {
        constructor(mapDiv: HTMLElement, opts?: MapOptions);
    }

    interface MapOptions {
        center?: LatLng | LatLngLiteral;
        zoom?: number;
    }

    class Marker {
        constructor(opts?: MarkerOptions);
        setMap(map: Map | null): void;
        setPosition(latLng: LatLng | LatLngLiteral): void;
        setTitle(title: string): void;
    }

    interface MarkerOptions {
        position?: LatLng | LatLngLiteral;
        map?: Map;
        title?: string;
    }

    interface LatLng {
        lat(): number;
        lng(): number;
    }

    interface LatLngLiteral {
        lat: number;
        lng: number;
    }

    // Add more interfaces and classes as needed
}
