import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Entidad } from '../schema/entidad';
import { TipoContribuyente } from '../schema/tipocontribuyente';
import { TipoDocumento } from '../schema/tipodocumento';

@Injectable({
  providedIn: 'root'
})
export class EntidadService {

  url: string = 'http://localhost:8080/api/entidad';

  constructor(private httpClient: HttpClient) { }

  obtenerListaDeEntidades() {
    return this.httpClient.get<Entidad[]>(this.url);
  }

  registrarEntidad(entidad: Entidad) {
    return this.httpClient.post<Entidad>(this.url, entidad);
  }

  obtenerEntidad(id: number) {
    return this.httpClient.get<Entidad>(this.url + "/" + id);
  }

  actualizarEntidad(entidad: Entidad) {
    return this.httpClient.put<Entidad>(this.url, entidad);
  }

  eliminarEntidad(Entidad: Entidad) {
    return this.httpClient.delete(this.url + "/" + Entidad.idEntidad);
  }

  obtenerListaDeTiposDocumento() {
    return this.httpClient.get<TipoDocumento[]>(this.url);
  }

  obtenerListaDeTiposContribuyente() {
    return this.httpClient.get<TipoContribuyente[]>(this.url);
  }
}
