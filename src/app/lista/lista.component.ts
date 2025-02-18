import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Page } from '../model/page';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss']
})
export class ListaComponent implements OnInit {

  displayedColumns: string[] = ['id', 'name', 'surname', 'telf', 'creationDate'];
  dataSource: any[] = [];
  currentPage: Page = {};

  constructor() {
  }

  ngOnInit(): void {
    this.cargarListadoCuentas();
  }

  cargarListadoCuentas() {
    this.dataSource = [
      {
        idUsuario: "99999953",
        email: "email@email.com",
        nombre: "wertwretwertwrt",
        apellido: "dfgdfgdfgd",
        telefono: 943212212,
        fcreacion: "2020-04-03",
      },
      {
        idUsuario: "999998288",
        email: "email@email.com",
        nombre: "htftramitacionfinanzas",
        apellido: "desconocido",
        telefono: 943121212,
        fcreacion: 1739792606214,
      },
      {
        idUsuario: "999993851",
        email: "email@email.com",
        nombre: "htftramitacionfinanzas",
        apellido: "desconocido",
        telefono: 943121212,
        fcreacion: 1739792606214,
      },
      {
        idUsuario: "99999200",
        email: "email@email.com",
        nombre: "dsigestionrulib",
        apellido: "desconocido",
        telefono: 943121212,
        fcreacion: 1739792606214,
      },
      {
        idUsuario: "999987316",
        email: "email@email.com",
        nombre: "dsigestionrulib",
        apellido: "desconocido",
        telefono: 943121212,
        fcreacion: 1739792606214,
      },
      {
        idUsuario: "999984389",
        email: "email@email.com",
        nombre: "htftramitacionfinanzas",
        apellido: "desconocido",
        telefono: 943121212,
        fcreacion: 1739792606214,
      },
      {
        idUsuario: "999981684",
        email: "email@email.com",
        nombre: "htftramitacionfinanzas",
        apellido: "hepgestionexpedientes",
        telefono: 943121212,
        fcreacion: 1739792606214,
      },
      {
        idUsuario: "999977846",
        email: "email@email.com",
        nombre: "dsigestionrulib",
        apellido: "dgevaloracioneconomica",
        telefono: 943121212,
        fcreacion: 1739792606214,
      },
      {
        idUsuario: "999976199",
        email: "email@email.com",
        nombre: "dssseguridadpoliticasocial",
        apellido: "desconocido",
        telefono: 943121212,
        fcreacion: 1739792606214,
      },
      {
        idUsuario: "999974216",
        email: "email@email.com",
        nombre: "htftramitacionfinanzas",
        apellido: "desconocido",
        telefono: 943121212,
        fcreacion: 1739792606214,
      }
    ];
  }

}

