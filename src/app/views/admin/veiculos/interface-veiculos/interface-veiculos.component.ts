import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-interface-veiculos',
  templateUrl: './interface-veiculos.component.html',
  styleUrls: ['./interface-veiculos.component.scss']
})
export class InterfaceVeiculosComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  rota = (event: any) => {
    switch (event) {
        case 1:
            this.router.navigate(['/admin/veiculos/listar']);
            break;
        case 2:
            this.router.navigate(['/admin/veiculos/cadastrar']);
            break;
    }
  }

}
