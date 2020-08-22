/*
Title: Assignment 7.3
Author: Professor Krasso
Date: 22 August 2020
Modified By: Brendan Mulhern
Description: This is project is the GPA-Calulator App!
*/

import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-gpa',
  templateUrl: './gpa.component.html',
  styleUrls: ['./gpa.component.css']
})
export class GpaComponent implements OnInit {
  @Input() gpaTotal: number;
  constructor() { }

  ngOnInit(): void {
  }

}
