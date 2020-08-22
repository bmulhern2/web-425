/*
Title: Assignment 7.3
Author: Professor Krasso
Date: 22 August 2020
Modified By: Brendan Mulhern
Description: This is project is the GPA-Calulator App!
*/

import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-grade-summary',
  templateUrl: './grade-summary.component.html',
  styleUrls: ['./grade-summary.component.css']
})
export class GradeSummaryComponent implements OnInit {
  @Input() grade: string;
  @Input() course: string;
  constructor() { }

  ngOnInit(): void {
  }

}
