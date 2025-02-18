import { Component, inject, OnInit, ViewChild } from '@angular/core';
import { Page } from '../model/page';
import { CuentaService } from '../shared/cuenta.service';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';
import { MatPaginator, PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss']
})
export class ListaComponent implements OnInit {

  displayedColumns: string[] = ['id', 'name', 'surname', 'telf', 'creationDate'];
  dataSource: MatTableDataSource<any>;
  currentPage: Page = {};

  cuentaSub: Subscription;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  loading: boolean = false;
  
  constructor(private cuentaService: CuentaService) {
    this.dataSource = new MatTableDataSource();
  }

  ngOnInit(): void {
    this.cargarListadoCuentas(0);
  }

  cargarPagina(event: PageEvent) {
    this.cargarListadoCuentas(event.pageIndex);
  }

  cargarListadoCuentas(pagina: number) {
    if (this.cuentaSub && !this.cuentaSub.closed) {
      this.cuentaSub.unsubscribe();
    }
    this.loading = true;
    this.cuentaSub = this.cuentaService.cargarListadoCuentas(pagina).subscribe({
      next: (page: Page) => {
        this.currentPage = page;
        this.dataSource = new MatTableDataSource(page.content);
        this.loading = false;
      },
      error: () => {
        this.loading = false;
      }
    });
  }

}

