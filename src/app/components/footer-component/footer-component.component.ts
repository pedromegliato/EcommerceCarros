import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer-component',
  templateUrl: './footer-component.component.html',
  styleUrls: ['./footer-component.component.scss']
})
export class FooterComponentComponent implements OnInit {

  dateNow: any;

  constructor(private router: Router) { }

  ngOnInit(): void {
      let date = new Date();
      this.dateNow = date.getFullYear();
  }

  menuRota = (event: any) => {
    switch (event) {
        case 1:
            this.router.navigate(['/']);
    }
}

}
