import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login/login.service';

@Component({
  selector: 'app-header-component',
  templateUrl: './header-component.component.html',
  styleUrls: ['./header-component.component.scss']
})
export class HeaderComponentComponent implements OnInit {

  auth: any;

  constructor(
    private router: Router,
    private loginservice: LoginService
    ) { }

  ngOnInit(): void {
    this.auth = this.loginservice.isAuthenticated();
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
          case 8:
              this.router.navigate(['/admin']);
              break;    
      }
  }

}
