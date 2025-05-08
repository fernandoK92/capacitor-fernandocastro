import { Injectable } from '@angular/core';
import { Geolocation, GeolocationPosition } from '@capacitor/geolocation';

@Injectable({
  providedIn: 'root'
})
export class GeolocationService {
  async obtenerUbicacion(): Promise <GeolocationPosition> {
    const position = await Geolocation.getCurrentPosition();
  return position;
}
}