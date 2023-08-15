import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TipoUsuario } from '../schema/tipousuario';

@Injectable({
  providedIn: 'root'
})
export class TipoUsuarioService {

  url: string = 'http://localhost:8080/api/tipoUsuario';

  constructor(private httpClient: HttpClient) { }

  obtenerListaDeTiposUsuario() {
    return this.httpClient.get<TipoUsuario[]>(this.url);
  }

  registrarTipoUsuario(tipoUsuario: TipoUsuario) {
    return this.httpClient.post<TipoUsuario>(this.url, tipoUsuario);
  }

  obtenerTipoUsuario(id: number) {
    return this.httpClient.get<TipoUsuario>(this.url + "/" + id);
  }

  actualizarTipoUsuario(tipoUsuario: TipoUsuario) {
    return this.httpClient.put<TipoUsuario>(this.url, tipoUsuario);
  }

  eliminarTipoUsuario(TipoUsuario: TipoUsuario) {
    return this.httpClient.delete(this.url + "/" + TipoUsuario.idTipoUsuario);
  }
}
