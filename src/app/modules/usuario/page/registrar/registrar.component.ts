import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TipoUsuario } from 'src/app/data/schema/tipousuario';
import { Usuario } from 'src/app/data/schema/usuario';
import { TipoUsuarioService } from 'src/app/data/service/tipousuario.service';
import { UsuarioService } from 'src/app/data/service/usuario.service';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css']
})
export class RegistrarComponent implements OnInit{
  tiposUsuario?:TipoUsuario[];
  modelUsuario = new Usuario();

  constructor(private router: Router, private usuarioService: UsuarioService,private tipoUsuarioService:TipoUsuarioService){}
  ngOnInit(): void {
    
    this.getObtenerListaDeUsuario();
  }

  guardarUsuario(usuario: Usuario){
    this.usuarioService.registrarUsuario(usuario).subscribe(data => {
      this.router.navigate(['usuario']);
    });
  }


  getObtenerListaDeUsuario() {
    this.tipoUsuarioService.obtenerListaDeTiposUsuario().subscribe(
      data => {
        this.tiposUsuario = data;
        console.log(data);
      },
      error => {
        console.log(error);
      }
    );
  }
}
