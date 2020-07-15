/*
; Title: Exercise 2.3
; Author: Professor Krasso
; Date: 15 July 2020
; Modified By: Brendan Mulhern
; Description: This is Exercise 2.3. This exercise is about adding stuff to the profile-application.
*/
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MyImageComponent } from './my-image/my-image.component';
import { MyDetailsComponent } from './my-details/my-details.component';

@NgModule({
  declarations: [
    AppComponent,
    MyImageComponent,
    MyDetailsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
