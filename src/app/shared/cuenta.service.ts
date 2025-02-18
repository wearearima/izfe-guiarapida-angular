import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CuentaService {

  constructor() { }

  cargarListadoCuentas() {
    return [
      {
        idUsuario: "99999953",
        email: "email@email.com",
        nombre: "urko",
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
