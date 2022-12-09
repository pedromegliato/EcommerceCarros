import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ConfiguracaoService } from 'src/app/services/configuracao/configuracao.service';

@Component({
  selector: 'app-interface-cad-veiculos',
  templateUrl: './interface-cad-veiculos.component.html',
  styleUrls: ['./interface-cad-veiculos.component.scss']
})
export class InterfaceCadVeiculosComponent implements OnInit {


  carro = {
    nome: "",
    marca: "",
    modelo:"",
    ano: 0,
    kilometragem: 0,
    valor: 0,
    valorPromocao: 0,
    is_promocao: false,
  }
  img: any;


  constructor(
    private service: ConfiguracaoService
  ) { }

  ngOnInit(): void {
  }

  onimg = (event: any) => {
    this.img = event.target.files[0];
    this.img.name.normalize('NFD').replace(/[\u0300-\u036f]/g, "");
  }

  cadastrar = () => { 
    if(this.carro.valorPromocao == 0){
      this.carro.valorPromocao = this.carro.valor;
    } else {
      this.carro.is_promocao = true;
    }

    if(this.carro.nome == "" || this.carro.marca == "" || this.carro.modelo == "" || this.img == null || this.img == undefined){
        alert("Preencha todos campos obrigatorios!")
    }else {
        this.service.postCarro(this.carro).subscribe(data=> {
            const obj = JSON.stringify(data);
            const id = JSON.parse(obj);

            const fotoCarro = new FormData();
            fotoCarro.append("foto", this.img);
            fotoCarro.append("fotos", id.id);


            this.service.postFoto(fotoCarro).subscribe(data=> {
              alert("Cadastro realizado com sucesso!");
              window.location.reload();
            }, error => {
              this.service.deleteCarro(id.id);
              alert("Erro ao realizar cadastro!");
              // window.location.reload();
            });

        })
    }

  }

}
