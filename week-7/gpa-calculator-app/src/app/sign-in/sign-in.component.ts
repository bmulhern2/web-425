/*
Title: Assignment 7.3
Author: Professor Krasso
Date: 22 August 2020
Modified By: Brendan Mulhern
Description: This is project is the GPA-Calulator App!
*/

import { Component, OnInit } from '@angular/core';
import { SignInService } from '../sign-in.service'
import { Router } from '@angular/router'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
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
    this.signInForm = this.formBuilder.group({ studentId: [", Validators.compose([Validators.required, Validators.pattern(‘^[0-9]*$)’])]
    })
}
  getForm() {
    return this.signInForm.controls;
  }
  onSubmit() {
    let formValues = this.signInForm.value;
    const studentId = parseInt(formValues.studentId)
    this.cookieService.set('session_user', studentId.toString(), 1)
  }
}
