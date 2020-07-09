/*
============================================
; Title: Assignment 1.3
; Author: Professor Krasso
; Date: 9 July 2020
; Modified By: Brendan Mulhern
; Description: This is angular.
;====
*/
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = "Brendan"
  myWorld = 'You are now tuned in to Brendan\'s world!';
}
