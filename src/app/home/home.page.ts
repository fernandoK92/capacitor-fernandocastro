import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GeolocationService } from '../services/geolocation.service';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, IonicModule],
  templateUrl: './home.page.html',
})
export class HomePage {
  latitud: number | null = null;
  longitud: number | null = null;

  constructor(private geoservice: GeolocationService) {}

  async obtenerUbicacion() {
    const position = await this.geoservice.obtenerUbicacion();
    this.latitud = position.coords.latitude;
    this.longitud = position.coords.longitude;
  }
}