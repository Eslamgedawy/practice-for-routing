import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanActivateChild } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { state } from '@angular/animations';

@Injectable()
export class AuthServiceGuard implements CanActivate, CanActivateChild {
  constructor(private authServive:AuthService,
              private router: Router){
  }
  canActivate(next: ActivatedRouteSnapshot,state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
   return this.authServive.isAuthenticated().then(
      (isauth: boolean)=>{
        if(isauth){
          return true;
        }else{
          this.router.navigate(['/'])
        }
      }
    )
  }
  canActivateChild(next: ActivatedRouteSnapshot,state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean{
    this.canActivate(next,state);
  }
}
