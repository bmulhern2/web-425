/*
Title: Assignment 7.3
Author: Professor Krasso
Date: 22 August 2020
Modified By: Brendan Mulhern
Description: This is project is the GPA-Calulator App!
*/

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SignInService {
  studentIds: Array<number>
  constructor() { 
    this.studentIds = [1007, 1008, 1009, 1010, 1011, 1012]
  }
  validate(studentId: number) {
    return this.studentIds.some(id => id === studentId);
  }
}
