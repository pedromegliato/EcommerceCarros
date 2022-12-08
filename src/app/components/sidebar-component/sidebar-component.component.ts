import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar-component',
  templateUrl: './sidebar-component.component.html',
  styleUrls: ['./sidebar-component.component.scss']
})
export class SidebarComponentComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  rota = (event :any) => {
    switch (event) {
      case 1:
          this.router.navigate(['/admin/dashboard']);
          break;
      case 2:
          this.router.navigate(['/admin/veiculos']);
          break;
      case 2:
          this.router.navigate(['/admin/veiculos']);
          break;
      }
    }
  }

}
