import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { ConfiguracaoService } from '../services/configuracao/configuracao.service';
import { LoginService } from '../services/login/login.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private authservice : LoginService,
    private service: ConfiguracaoService,
    private router : Router
  ){}
  
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {

    const authenticad = this.authservice.isAuthenticated();
    if(authenticad){
        this.service.getUser().subscribe(data => {
            if(data.length == 1){
              sessionStorage.removeItem("rt");
              this.router.navigate(['/']);
              return false;
            }
            return true;
        })
    }
    else{
      sessionStorage.removeItem("rt");
      this.router.navigate(['iniciar']);
      return false;
    }
  }
}
