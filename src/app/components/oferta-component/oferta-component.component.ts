import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-oferta-component',
  templateUrl: './oferta-component.component.html',
  styleUrls: ['./oferta-component.component.scss']
})
export class OfertaComponentComponent implements OnInit {

  constructor() { }

  carro = "../../../assets/img/marketing/carro.png"

  ngOnInit(): void {
  }

  filtro = () => {
    
  }

}
