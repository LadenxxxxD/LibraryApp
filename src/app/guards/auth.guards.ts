import { CanActivate, RouterStateSnapshot, ActivatedRouteSnapshot, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { AuthService } from '../service/auth.service';

@Injectable()
export class AuthGuard implements CanActivate{
  constructor(private authService: AuthService, private router: Router) {}
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
    console.log(this.authService.isLogin());
    if (!this.authService.isLogin()) {
      this.router.navigate(['login']);
      return false;
    }
    return true;
  }
}


