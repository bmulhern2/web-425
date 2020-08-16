/*
Title: Assignment 6.3
Author: Professor Krasso
Date: 15 August 2020
Modified By: Brendan Mulhern
Description: This is project is the GPA-Calulator App!
*/

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-base-layout',
  templateUrl: './base-layout.component.html',
  styleUrls: ['./base-layout.component.css']
})
export class BaseLayoutComponent implements OnInit {
  assignment: string;
  constructor() { 
    this.assignment = 'Assignment 6.4 - Input Properties'
  }

  ngOnInit(): void {
  }

}
