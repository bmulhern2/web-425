/*
Title: Assignment 6.3
Author: Professor Krasso
Date: 15 August 2020
Modified By: Brendan Mulhern
Description: This is project is the GPA-Calulator App!
*/

import { Component, OnInit } from '@angular/core';
import { iTranscript } from '../transcript.interface'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  transcriptEntry: iTranscript;
  selectableGrades: Array<string> = ["A", "A-", "B+", "B", "B-", "C+", "C", "C-", "D+", "D", "D-", "F"];
  transcriptEntries: Array<iTranscript> = [];
  gpaTotal: number = 0;
  constructor() {
    this.transcriptEntry = {} as iTranscript;
  }
  ngOnInit(): void { }
  saveEntry() {
    this.transcriptEntries.push(this.transcriptEntry)
    this.transcriptEntry = {} as iTranscript;
  }
  calculateResults() {
    let gpa: number = 0;
    for (let i = 0; i < this.transcriptEntries.length; i++) {
      switch (this.transcriptEntry.grade) { 
        case 'A': gpa += 4.0; break;
        case 'A-': gpa = 3.70; break;
        case 'B+': gpa = 3.33; break;
        case 'B': gpa = 3.00; break;
        case 'B-': gpa = 2.70; break;
        case 'C+': gpa = 2.30; break;
        case 'C': gpa = 2.00; break;
        case 'C-': gpa = 1.70; break;
        case 'D+': gpa = 1.30; break;
        case 'D': gpa = 1.00; break;
        case 'D-': gpa = .70; break;
        case 'F': gpa = 0; break;
      }
    }
    this.gpaTotal = gpa / this.transcriptEntries.length;

  }
  clearEntries() {
    this.transcriptEntries = [];
    this.gpaTotal = 0;
  }
}
