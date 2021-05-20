import { Injectable } from '@angular/core';

import { AuthService } from 'src/app/auth/auth.service';


import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, Route } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {
  constructor( private _authService: AuthService,private _router: Router) {

  }
  canActivate(): boolean{
    if(this._authService.isAuthenticated()){
      return true;
    }else{
      this._router.navigate(['/home'])
      return false;
    }
    }
  
}
