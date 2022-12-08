import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filtros-component',
  templateUrl: './filtros-component.component.html',
  styleUrls: ['./filtros-component.component.scss']
})
export class FiltrosComponentComponent implements OnInit {

  toggleColapse: boolean = true;

  filtros = [
    {
      id: 1,
      nome: "Promoção",
      conteudo: [
          {
            id: 1,
            nome: "Promoção BlackFriday",
            is_subCategory: false,
            is_show: false,
            category: [
              {
                id:1,
                nome: "",
                is_show: false,
              }
            ]
          }
      ]
    },
    {
      id: 2,
      nome: "Compre um carro online",
      conteudo: [
          {
            id: 1,
            nome: "Online",
            is_subCategory: false,
            is_show: false,
            category: [
              {
                id:1,
                nome: "",
                is_show: false,
              }
            ]
          }
      ]
    },
    {
      id: 3,
      nome: "Localizacao - Estado e Loja",
      conteudo: [
          {
            id: 1,
            nome: "Minas Gerais",
            is_subCategory: true,
            is_show: false,
            category: [
              {
                id:1,
                nome: "ViaShopping Barreiro",
                is_show: false,
              }
            ]
          },
          {
            id: 2,
            nome: "Rio de Janeiro",
            is_subCategory: true,
            is_show: false,
            category: [
              {
                id:1,
                nome: "Galeao: Edifício Garagem T2",
                is_show: false,
              },
              {
                id:2,
                nome: "Nova América",
                is_show: false,
              },
              {
                id:3,
                nome: "Shopping Nova Iguaçu",
                is_show: false,
              }
            ]
          },
          {
            id: 3,
            nome: "São Paulo",
            is_subCategory: true,
            is_show: false,
            category: [
              {
                id:1,
                nome: "Em trânsito",
                is_show: false,
              },
              {
                id:2,
                nome: "Hub PGLM City",
                is_show: false,
              },
              {
                id:3,
                nome: "PGLM Iguatemi Campinas",
                is_show: false,
              }
            ]
          }
      ]
    },
    {
      id: 4,
      nome: "Marcas e modelo",
      conteudo: [
          {
            id: 1,
            nome: "Bmw",
            is_subCategory: false,
            is_show: false,
            category: [
              {
                id:1,
                nome: "118i",
                is_show: false,
              }
            ]
          }
      ]
    },

  ]

  constructor() { }

  ngOnInit(): void {
  }

  colapse = () => {
      if(this.toggleColapse === false) {
          this.toggleColapse = true;
      } else {
          this.toggleColapse = false;
      }
  }

  expande = (itemId: any, event: any, conteudoId: any) => {
      if(this.filtros[itemId-1].conteudo[conteudoId-1].is_show === false) {
          this.filtros[itemId-1].conteudo[conteudoId-1].is_show = true;
      } else {
          this.filtros[itemId-1].conteudo[conteudoId-1].is_show = false;
      }
  }

  ativaSubCategoria = (itemId: any, event: any, conteudoId: any, categoryId: any) => {
    if(this.filtros[itemId-1].conteudo[conteudoId-1].category[categoryId-1].is_show === false) {
        this.filtros[itemId-1].conteudo[conteudoId-1].category[categoryId-1].is_show  = true;
    } else {
        this.filtros[itemId-1].conteudo[conteudoId-1].category[categoryId-1].is_show  = false;
    }
}

}
