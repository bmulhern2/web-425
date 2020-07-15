/*
; Title: Exercise 2.3
; Author: Professor Krasso
; Date: 15 July 2020
; Modified By: Brendan Mulhern
; Description: This is Exercise 2.3. This exercise is about adding stuff to the profile-application.
*/

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-details',
  templateUrl: './my-details.component.html',
  styleUrls: ['./my-details.component.css']
})
export class MyDetailsComponent implements OnInit {
  constructor() { }
  ngOnInit(): void {
  }
  myProfile = new Person("Brendan Mulhern", "Pizza", "Magenta", ["#Typescript", "#2020", "#CodingWithAngular", "#ngOmaha"]);
}
export class Person {
  fullName: string;
  favoriteFood: string;
  favoriteColor: string;
  keywords: Array<string>;
  constructor(fullName: string, favoriteFood: string, favoriteColor: string, keywords: Array<string>) {
  this.fullName = fullName;
  this.favoriteFood = favoriteFood;
  this.favoriteColor = favoriteColor;
  this.keywords = keywords;
  }
}
