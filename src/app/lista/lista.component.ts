import { Component, inject, OnInit } from '@angular/core';
import { Page } from '../model/page';
import { CuentaService } from '../shared/cuenta.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss']
})
export class ListaComponent implements OnInit {

  displayedColumns: string[] = ['id', 'name', 'surname', 'telf', 'creationDate'];
  dataSource: any[] = [];
  currentPage: Page = {};

  constructor(private cuentaService: CuentaService) {
  }

  ngOnInit(): void {
    this.cargarListadoCuentas();
  }

  cargarListadoCuentas() {
    this.dataSource = this.cuentaService.cargarListadoCuentas();
  }

}

