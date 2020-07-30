import { Injectable } from '@angular/core';
import { IComposer } from './composer.interface'

@Injectable({
  providedIn: 'root'
})
export class ComposerService {
  composers: Array<IComposer> = [
    { "composerId": 0, "name": "Mozart", "genre": "Classical" },
    { "composerId": 1, "name": "Beethoven", "genre": "Classical" },
    { "composerId": 2, "name": "Bach", "genre": "Classical" },
    { "composerId": 3, "name": "Deadmau5", "genre": "Electic Dance Music" },
    { "composerId": 4, "name": "Marshmello", "genre": "Hip-Hop" }
  ]
  getComposers(composerId: number) {
    for (let composer of this.composers) {
        if(composer.composerId === composerId) {
            return composer
        } else {
            return null
        }
    }
  }
  
}
