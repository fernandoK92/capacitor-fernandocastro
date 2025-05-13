import { Injectable } from '@angular/core';
import { Haptics, ImpactStyle } from '@capacitor/haptics';

@Injectable({ providedIn: 'root' })
export class HapticsService {
  vibrar(): void {
    Haptics.impact({ style: ImpactStyle.Medium });
  }
}
