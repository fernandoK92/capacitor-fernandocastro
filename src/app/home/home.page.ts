import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GeolocationService } from '../services/geolocation.service';
import { CameraService } from '../services/camera.service';
import { HapticsService } from '../services/haptics.service';
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
  fotoBase64: string | null = null;

  constructor(
    private geoservice: GeolocationService,
    private cameraService: CameraService,
    private hapticsService: HapticsService
  ) {}

  async obtenerUbicacion() {
    const position = await this.geoservice.obtenerUbicacion();
    this.latitud = position.coords.latitude;
    this.longitud = position.coords.longitude;
  }

  async tomarFoto() {
    this.fotoBase64 = await this.cameraService.tomarFoto();
  }

  vibrar() {
    this.hapticsService.vibrar();
  }
}
