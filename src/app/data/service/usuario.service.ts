import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TipoUsuario } from '../schema/tipousuario';
import { Usuario } from '../schema/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  url: string = 'http://localhost:8080/api/usuario';

  constructor(private httpClient: HttpClient) { }

  obtenerListaDeUsuarios() {
    return this.httpClient.get<Usuario[]>(this.url);
  }

  registrarUsuario(usuario: Usuario) {
    return this.httpClient.post<Usuario>(this.url, usuario);
  }

  obtenerUsuario(id: number) {
    return this.httpClient.get<Usuario>(this.url + "/" + id);
  }

  actualizarUsuario(usuario: Usuario) {
    return this.httpClient.put<Usuario>(this.url, usuario);
  }

  eliminarUsuario(Usuario: Usuario) {
    return this.httpClient.delete<Usuario>(this.url + "/" + Usuario.idUsuario);
  }

  obtenerListaDeTiposUsuario() {
    return this.httpClient.get<TipoUsuario[]>(this.url);
  }
}
