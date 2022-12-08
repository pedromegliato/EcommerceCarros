import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header-component',
  templateUrl: './header-component.component.html',
  styleUrls: ['./header-component.component.scss']
})
export class HeaderComponentComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
   
  }

  rotaAtivaMenu = () => {

  }

  menuRota = (event: any) => {
      switch (event) {
          case 1:
              this.router.navigate(['/']);
              break;
          case 7:
              this.router.navigate(['/iniciar']);
              break;
      }
  }

}
