import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario.model';
import { LoginService } from 'src/app/services/login/login.service';

@Component({
  selector: 'app-interface-login-cadastro',
  templateUrl: './interface-login-cadastro.component.html',
  styleUrls: ['./interface-login-cadastro.component.scss']
})
export class InterfaceLoginCadastroComponent implements OnInit {

  ids : any;
  erro = false;
  erroCad = false;
  usuario = { username: "", password: "" };

  usuarioCadastro = {
    last_login: "",
    password: "",
    is_superuser: false,
    username: "",
    first_name: "",
    last_name: "",
    email: "",
    is_staff: false,
    is_active: true,
    nivelAcesso: "1",
    endereco: "",
    cidade: "",
    estado: "",
    cep: "",
    sobre: ""
  }

  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
      this.tabChange("0");
  }

  tabChange =(param : any) =>{
      this.ids = String(param);
  }

  logar = () => {
      if(this.usuario.password == "" || this.usuario.username == "") {
        this.erro=true;
      } else {
        this.erro=false;
        console.log(this.usuario);
        this.loginService.login(this.usuario);
      }
      
  }

  cadastrar = () => {
    if(this.usuario.password == "" || this.usuario.username == "") {
      this.erroCad=true;
    } else {
      this.erroCad=false;
      console.log(this.usuarioCadastro);
      this.loginService.login(this.usuario);
    }
  }

}
