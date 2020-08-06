/*
Title: Assignment 5.2 
Author: Professor Krasso
Date: 6 August 2020
Modified By: Brendan Mulhern
Description: It's the in-n-out book project!
*/

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  assignment;
  constructor() {
    this.assignment = "Exercise 5.2 - Navigation and Layout"
  }
}
