import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { Carro } from 'src/app/models/carro.model';
import { ConfiguracaoService } from 'src/app/services/configuracao/configuracao.service';

@Component({
  selector: 'app-interface-list-veiculos',
  templateUrl: './interface-list-veiculos.component.html',
  styleUrls: ['./interface-list-veiculos.component.scss']
})
export class InterfaceListVeiculosComponent implements OnInit {

  listCarro: Carro [];

  @ViewChild('paginator', { static: true }) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  displayedColumns!: string[];
  dataSource: any;
  total: any;
  item: any;

  constructor(
    private router: Router,
    private service: ConfiguracaoService
  ) {}

  ngOnInit(): void {
      this.getDados();
  }

  getDados = () => {
      this.service.getListCarros().subscribe(data => {
          this.listCarro = data;
          this.displayedColumns = ['nome', 'marca', 'ano', 'valor', 'action'];
          this.dataSource = new MatTableDataSource<Carro>(this.listCarro);
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
      });
  };

  applyFilter = (event: Event) => {
      const filterValue = (event.target as HTMLInputElement).value;
      this.dataSource.filter = filterValue.trim().toLowerCase();
  };

  editNoticia = (element) => {
    // this.noticiasService.setCacheNoticiaEditavel(element)
    // this.router.navigate(['/admin/add-noticia']);
  }

}
