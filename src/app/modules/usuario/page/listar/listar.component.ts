import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/data/schema/usuario';
import { UsuarioService } from 'src/app/data/service/usuario.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit{
  usuarios?:Usuario[];
  usuario = new Usuario();

  constructor(private usuarioService:UsuarioService, private router:Router){
    this.usuarios=[];
  }
  ngOnInit(): void {
    this.getObtenerUsuarios();
  }

 private getObtenerUsuarios(){
    this.usuarioService.obtenerListaDeUsuarios().subscribe(
      data =>{ 
        this.usuarios = data;
        console.log(data);
      },
      error => {
        console.log(error);
      }
    );
  }

  nuevoUsuario():void {
    this.router.navigate(['usuario/registrar']);
  }

  editarUsuario(usuario:Usuario):void {
    localStorage.setItem('id', usuario.idUsuario.toString());
    this.router.navigate(['usuario/actualizar']);
  }
  
  eliminarUsuario(usuario: Usuario): void {
    this.usuarioService.eliminarUsuario(usuario).subscribe(
      () => {
        this.usuarios = this.usuarios!.filter(p => p !== usuario);
      },
      error => {
        console.log(error);
      }
    );
  }
}
