import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TipoUsuario } from 'src/app/data/schema/tipousuario';
import { Usuario } from 'src/app/data/schema/usuario';
import { TipoUsuarioService } from 'src/app/data/service/tipousuario.service';
import { UsuarioService } from 'src/app/data/service/usuario.service';

@Component({
  selector: 'app-actualizar',
  templateUrl: './actualizar.component.html',
  styleUrls: ['./actualizar.component.css']
})
export class ActualizarComponent implements OnInit{
  tiposUsuario?:TipoUsuario[];
  modelUsuario = new Usuario();

  constructor(private router: Router, private usuarioService: UsuarioService,private tipoUsuarioService:TipoUsuarioService){}
  ngOnInit(): void {
    this.getObtenerListaDeUsuario();
    this.editar();
  }

  editar(){
    let id = JSON.parse(localStorage.getItem('id') as string);
    this.usuarioService.obtenerUsuario(id).subscribe(
      data=>{this.modelUsuario = data;
      });
  }

  actualizarUsuario(usuario:Usuario){
    this.usuarioService.actualizarUsuario(usuario).subscribe(dato=>{
      this.modelUsuario = dato;
      this.router.navigate(['usuario']);
    });

}

  getObtenerListaDeUsuario() {
    this.tipoUsuarioService.obtenerListaDeTiposUsuario().subscribe(
      data => {
        this.tiposUsuario = data;
      },
      error => {
        console.log(error);
      }
    );
  }
}
