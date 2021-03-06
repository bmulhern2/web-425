/*
Title: Assignment 5.4
Author: Professor Krasso
Date: 6 August 2020
Modified By: Brendan Mulhern
Description: It's the in-n-out book project part 3!
*/

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookListComponent } from './book-list/book-list.component'
import { ContactComponent } from './contact/contact.component'
import { AboutComponent } from './about/about.component'

const routes: Routes = [
  { path: '', component: BookListComponent },
  { path: 'book-list', component: BookListComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'about', component: AboutComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
