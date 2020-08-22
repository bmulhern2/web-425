/*
Title: Assignment 7.2
Author: Professor Krasso
Date: 22 August 2020
Modified By: Brendan Mulhern
Description: This is project is the GPA-Calulator App Part 3!
*/

import { Component, OnInit } from '@angular/core';
import { SignInService } from '../sign-in.service'
import { Router } from '@angular/router'
import { FormBuilder, FormGroup } from '@angular/forms'
import { CookieService } from 'ngx-cookie-service'

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  signInForm: FormGroup;
  errorMessage: string
  constructor(private signInService: SignInService, private router: Router, private formBuilder: FormBuilder, private cookieService: CookieService) { }

  ngOnInit() {
    this.signInForm = this.formBuilder.group({ studentId: "" })
  }
  onSubmit() {
    let formValues = this.signInForm.value;
    const studentId = parseInt(formValues.studentId)
    this.cookieService.set('session_user', studentId.toString(), 1)
  }
}
