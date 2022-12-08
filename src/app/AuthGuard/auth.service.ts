import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { LoginService } from '../services/login/login.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private authservice : LoginService,
    private router : Router
  ){}
  
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {

    const authenticad = this.authservice.isAuthenticated();
    if(authenticad){
        return true;
    }
    else{
      sessionStorage.removeItem("rt");
      this.router.navigate(['iniciar']);
      return false;
    }
  }
}
