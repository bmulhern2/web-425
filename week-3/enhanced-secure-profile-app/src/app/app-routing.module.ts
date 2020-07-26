import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router'
import { SignInComponent } from './sign-in/sign-in.component'
import { HomeComponent } from './home/home.component'
import { SignInGuard } from './sign-in.guard'

export let AppRoutes: Routes = [
  {path: "", component: SignInComponent },
  {path: 'home', component: HomeComponent, canActivate: [SignInGuard]}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class AppRoutingModule { }
