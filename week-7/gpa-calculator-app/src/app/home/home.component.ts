/*
Title: Assignment 7.3
Author: Professor Krasso
Date: 22 August 2020
Modified By: Brendan Mulhern
Description: This is project is the GPA-Calulator App!
*/

import { Component, OnInit } from '@angular/core';
import { iTranscript } from '../transcript.interface'
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  selectableGrades: Array<string> = ["A", "A-", "B+", "B", "B-", "C+", "C", "C-", "D+", "D", "D-", "F"];
  transcriptEntries: Array<iTranscript> = [];
  gpaTotal: number = 0;
  transcriptForm: FormGroup;
  constructor(private fb: FormBuilder) { }
  ngOnInit() {
    this.transcriptForm = this.fb.group({
      course: ["", Validators.required],
      grade: ["", Validators.required]
    })
   }
  get() {
    return this.transcriptForm.controls;
  }
  onSubmit(event) {
    this.transcriptEntries.push({ course: this.form.course.value, grade: this.form.grade.value })
    event.currentTarget.reset();

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
