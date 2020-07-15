/*
; Title: Assignment 2.4
; Author: Professor Krasso
; Date: 15 July 2020
; Modified By: Brendan Mulhern
; Description: This is the composer app.
*/
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-composer-list',
  templateUrl: './composer-list.component.html',
  styleUrls: ['./composer-list.component.css']
})
export class ComposerListComponent implements OnInit {
  Composer: Array<Composer>
  constructor() {
  }
  Composers = [
    { "id": 0, "name": "Mozart", "genre": "Classical" },
    { "id": 1, "name": "Beethoven", "genre": "Classical" },
    { "id": 2, "name": "Bach", "genre": "Classical" },
    { "id": 3, "name": "Deadmau5", "genre": "Electic Dance Music" },
    { "id": 4, "name": "Marshmello", "genre": "Hip-Hop" }
  ]
  ngOnInit(): void {
  }

}
export class Composer {
  fullName: string;
  genre: string;
  constructor(fullName: string, genre: string) {
    this.fullName = fullName;
    this.genre = genre;
  }
}
