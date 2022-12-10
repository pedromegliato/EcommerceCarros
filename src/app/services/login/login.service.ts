import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import jwt_decode from "jwt-decode";
import { Observable } from 'rxjs';
import { ConfiguracaoService } from '../configuracao/configuracao.service';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  jwtHelper: JwtHelperService = new JwtHelperService();

  API_CONF = 'http://localhost:8000/api/v1/'
  API_TOKEN = 'http://localhost:8000/api/'

  a : any ;
  

  constructor(
      private http : HttpClient,
      private service: ConfiguracaoService,
      private router: Router,
  ) { }

  getToken = () => {
      const tokenString = sessionStorage.getItem('rt')
      if (tokenString) {
          const token = JSON.parse(tokenString).access;
          return token;
      }
        return null;
  }

  isAuthenticated() : boolean {
      const token = this.getToken();
      if(token){
          const expired = this.jwtHelper.isTokenExpired(token);
          return !expired;
      }
      return false;
  }


  login = (usuario : any) => {
      return this.http.post( this.API_TOKEN + 'token/', usuario).subscribe(
        data =>{

            var rf = JSON.parse(JSON.stringify(data)).refresh;
            var rt = JSON.stringify(data);        
            var decoded = jwt_decode(rt);
            var id = JSON.parse(JSON.stringify(decoded)).user_id;  
            sessionStorage.setItem("rt", rt);
            this.service.getUser().subscribe((data) => {
                let user = data;
                    if(user.is_superuser == true) {
                        this.router.navigate(['admin']);
                    } else {
                        this.router.navigate(['/']);
                    }
            });
        },
        error => {
            alert("Login ou senha inválidos ou perfil Inativo");
        }
      );
  }

  cadastro = (usuario : any) => {

      return this.http.post(this.API_CONF + 'cadastro/', usuario).subscribe(
        data =>{
          alert("Login ou Cadastro realizado com sucesso");
          this.router.navigate(['login']);
    
        },
        error => {
          alert("Erro interno no sistema, entre em contato com Administrator");
        }
      );

  }

  getUserAuthenticad = () => {
      const token = this.getToken();
      if(token){
          const ususario = this. jwtHelper.decodeToken(token).user_id;
          return this.http.get(this.API_CONF + 'user/' + ususario);
      }
      return null;
  }

  logOut = () =>{
        alert("Você foi deslogado");
        sessionStorage.removeItem("rt");
        this.router.navigate(["/"]);
  }

  recup = (email : any) => {
      return this.http.post(this.API_CONF + 'reset/users/reset_password/', email).subscribe(
          data =>{
              alert("Confira sua caixa de Email");
              this.router.navigate(['login']);
          },
          error => {
              alert("Erro interno no sistema, entre em contato com Administrator");
          }
      );
  }

  SenhaNew = (senha : any) => {
      return this.http.post(this.API_CONF + 'reset/users/reset_password_confirm/', senha).subscribe(
          data =>{
              alert("Senha alterada com sucesso!");
              this.router.navigate(['login']);
      
          },
          error => {
              alert("Senha muito fraca, tente outra");
          }
      );

  }


}
