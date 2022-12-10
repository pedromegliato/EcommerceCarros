import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator, MatPaginatorIntl } from '@angular/material/paginator';
import { Carro } from 'src/app/models/carro.model';
import { ConfiguracaoService } from 'src/app/services/configuracao/configuracao.service';
import { ModalService } from 'src/app/services/modal/modal.service';
import { CustomPaginator } from 'src/app/services/Personalizacao-Material/CustomPaginator';

@Component({
  selector: 'app-interface-list-veiculos',
  templateUrl: './interface-list-veiculos.component.html',
  styleUrls: ['./interface-list-veiculos.component.scss'],
  providers: [
    { provide: MatPaginatorIntl, useValue: CustomPaginator() }
  ]
})
export class InterfaceListVeiculosComponent implements OnInit {

  imgErro = "../../../../../assets/img/sistema/exclusao.gif";

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
  }

  applyFilter = (event: Event) => {
      const filterValue = (event.target as HTMLInputElement).value;
      this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  onimg = (event: any) => {

      this.img = event.target.files[0];
      this.img.name.normalize('NFD').replace(/[\u0300-\u036f]/g, "");

      var image = document.getElementById('imgCarro') as HTMLImageElement;
      if(image !== null){
          const a = URL.createObjectURL(event.target.files[0]);
          image.src= a;
          console.log(image);
      }
  }

  editCarro = (event: any) => {
      this.item = event;
      this.openModal('editar');
  }

  confirmaDelete = (event: any) => {
      this.item = event;
      this.openModal('deletar');
  }

  delete = (event: any) => {
      this.service.deleteFoto(event.fotos[0].id).subscribe(data => {
        this.service.deleteCarro(event.id);
        window.location.reload();
      }, error => {
        alert("erro ao excluir");
      });  
  }

  openModal = (id: string) => {
      ModalService.show(id);
  }

  closeModal = (id: string) => {
      ModalService.hide(id);
  }

  salvar = (event: any) => { 

    if(this.img != null && this.img != undefined){
        const fotoCarro = new FormData();
        fotoCarro.append("foto", this.img);
        fotoCarro.append("fotos", event.id);

        this.service.putFoto(event.fotos[0].id, fotoCarro).subscribe(data => {
          console.log(data);
        });
    }
  
    this.service.putCarro(event).subscribe(data=> {
        alert("Carro atualizado com sucesso!");
        window.location.reload();
      })
  }

}
