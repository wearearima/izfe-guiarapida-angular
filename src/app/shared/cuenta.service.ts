import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Page } from '../model/page';

@Injectable({
  providedIn: 'root'
})
export class CuentaService {

  httpClient = inject(HttpClient);

  constructor() { }

  cargarListadoCuentas(page: number) {
    return this.httpClient.get<Page>(`http://localhost:8080/WAS/HACI/WFIGuiaRapidaRestWEB/api/cuentas/paginated?page=${page}&size=10`);
  }
}
