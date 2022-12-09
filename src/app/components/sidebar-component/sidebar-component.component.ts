import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar-component',
  templateUrl: './sidebar-component.component.html',
  styleUrls: ['./sidebar-component.component.scss']
})
export class SidebarComponentComponent implements OnInit {

  constructor(private router: Router) { }
  ids: any;
  
  ngOnInit(): void {
      this.setLoadMenuActivePage();
  }

  setLoadMenuActivePage = () => {
      if(window.location.pathname == '/admin/dashboard') {
          this.ids = 1;
      } else if(window.location.pathname == '/admin/veiculos' || window.location.pathname == '/admin/veiculos/listar' || window.location.pathname == '/admin/veiculos/cadastrar'){
          this.ids = 2;
      } else if(window.location.pathname == '/admin/servicos'){
          this.ids = 3;
      } else if(window.location.pathname == '/admin/configuracao'){
          this.ids = 4;
      }
  }

  setmenuActive = (event: any) => {
      if(event === 1){
          this.ids = 1;
      } else if(event === 2){
          this.ids = 2;
      } else if(event === 3){
          this.ids = 3;
      } else if(event === 4){
          this.ids = 4;
      }
  }

  rota = (event :any) => {
      switch (event) {
        case 1:
            this.setmenuActive(event);
            this.router.navigate(['/admin/dashboard']);
            break;
        case 2:
            this.setmenuActive(event);
            this.router.navigate(['/admin/veiculos']);
            break;
        case 3:
            this.setmenuActive(event);
            this.router.navigate(['/admin/servicos']);
            break;
        case 4:
            this.setmenuActive(event);
            this.router.navigate(['/admin/configuracao']);
            break;
        case 5:
            this.router.navigate(['/']);
            break;
      }
  }

}
