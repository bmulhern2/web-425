import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router'

@Injectable({
  providedIn: 'root'
})
export class SignInGuard implements CanActivate {
  constructor(private route: Router) { }
  canActivate(
    isLoggedIn: Boolean = next.queryParams.isLoggedIn,
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return true;
    if (isLoggedIn = 'True') { 
      return true 
    } else {
      this.router.navigate(['/'])
    }
  }
  
}
