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

  postCarro = (carro: any):Observable<any> =>{
    return this.http.post(this.APP_CONF_PROD + 'carro/', carro);
  }
  putCarro = (carro: any):Observable<any> =>{
    return this.http.put(this.APP_CONF_PROD + 'carro/'+carro.id+'/', carro);
  }

  postFoto = (foto: any):Observable<any> =>{
    return this.http.post(this.APP_CONF_PROD + 'fotosCarro/', foto);
  }
  putFoto = (id: any, event: any) => {
    return this.http.put(this.APP_CONF_PROD + 'fotosCarro/'+id+'/', event);
  }


  deleteCarro = (id: any) => {
    return this.http.delete(this.APP_CONF_PROD + 'carro/'+id+'/').subscribe(data => {
      alert('Carro deletado');
    });
  }

  deleteFoto = (id: any) => {
    return this.http.delete(this.APP_CONF_PROD + 'fotosCarro/'+id+'/');
  }



}
