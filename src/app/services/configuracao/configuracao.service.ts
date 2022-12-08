import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConfiguracaoService {

  // APP_CONF_PROD = "https://api.caams.org.br/v1/";
  APP_CONF_PROD = "http://localhost:8000/api/v1/";

  constructor(
    private http : HttpClient,
    private router: Router
  ) { }

  getUser = ():Observable<any> =>{
    return this.http.get(this.APP_CONF_PROD + 'user/');
  }

  getListCarros = ():Observable<any> =>{
      return this.http.get(this.APP_CONF_PROD + 'carro/');
  }



}
