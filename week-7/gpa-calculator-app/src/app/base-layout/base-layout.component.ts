/*
Title: Assignment 7.3
Author: Professor Krasso
Date: 22 August 2020
Modified By: Brendan Mulhern
Description: This is project is the GPA-Calulator App!
*/

import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service'
import { Router } from '@angular/router'

@Component({
  selector: 'app-base-layout',
  templateUrl: './base-layout.component.html',
  styleUrls: ['./base-layout.component.css']
})
export class BaseLayoutComponent implements OnInit {
  assignment: string;
  constructor(private cookieService: CookieService, private router: Router) { 
    this.assignment = 'GPA Calculator'
  }
  ngOnInit() { }
  signOut() {
    this.cookieService.deleteAll();
    this.router.navigate(['/session/sign-in']);
  }

}
