/*
Title: Assignment 4.4 
Author: Professor Krasso
Date: 1 August 2020
Modified By: Brendan Mulhern
Description: It's the enterprise-composer  project!
*/

import { Injectable } from '@angular/core';
import { IComposer } from './composer.interface'
import { Observable } from 'rxjs'
import { of } from 'rxjs'
import { map } from 'rxjs/operators'

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
  getComposers(): Observable<IComposer[]> {
    for (let composer of this.composers) {
        if(composer.composerId === composerId) {
            return of(this.composers)
        } else {
            return null
        }
    }
  }
  filterComposers(name: string): Observable<IComposer[]> {
    return of(this.composers).pipe(map(composers => composers.filter(composer =>
      composer.fullName.toLowerCase().indexOf(name) > -1 )))
  }
  
}
