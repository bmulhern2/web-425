/*
============================================
; Title: Assignment 1.5
; Author: Professor Krasso
; Date: 15 July 2020
; Modified By: Brendan Mulhern
; Description: This is the enhanced profile app.
;====
*/
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  assignment: string = "Exercise 2.3 - Data Binding";
  isLoggedIn: boolean = true
}
