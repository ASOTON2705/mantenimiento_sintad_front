import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TipoDocumento } from '../schema/tipodocumento';

@Injectable({
  providedIn: 'root'
})
export class TipoDocumentoService {

  url: string = 'http://localhost:8080/api/tipoDocumento';

  constructor(private httpClient: HttpClient) { }

  obtenerListaDeTiposDocumento() {
    return this.httpClient.get<TipoDocumento[]>(this.url);
  }

  registrarTipoDocumento(tipoUsuario: TipoDocumento) {
    return this.httpClient.post<TipoDocumento>(this.url, tipoUsuario);
  }

  obtenerTipoDocumento(id: number) {
    return this.httpClient.get<TipoDocumento>(this.url + "/" + id);
  }

  actualizarTipoDocumento(tipoDocumento: TipoDocumento) {
    return this.httpClient.put<TipoDocumento>(this.url, tipoDocumento);
  }

  eliminarTipoDocumento(TipoDocumento: TipoDocumento) {
    return this.httpClient.delete(this.url + "/" + TipoDocumento.idTipoDocumento);
  }
}
