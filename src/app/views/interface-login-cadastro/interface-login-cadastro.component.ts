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
      password: "",
      is_superuser: true,
      username: "",
      first_name: "",
      last_name: "",
      email: "",
      is_staff: true,
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
    if(this.usuarioCadastro.password == "" || this.usuarioCadastro.username == "" || this.usuarioCadastro.email == "") {
      this.erroCad=true;
    } else {
      this.erroCad=false;
      this.loginService.cadastro(this.usuarioCadastro);
    }
  }

}
