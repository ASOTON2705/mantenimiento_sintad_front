import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Entidad } from 'src/app/data/schema/entidad';
import { TipoContribuyente } from 'src/app/data/schema/tipocontribuyente';
import { TipoDocumento } from 'src/app/data/schema/tipodocumento';
import { EntidadService } from 'src/app/data/service/entidad.service';
import { TipoContribuyenteService } from 'src/app/data/service/tipocontribuyente.service';
import { TipoDocumentoService } from 'src/app/data/service/tipodocumento.service';

@Component({
  selector: 'app-actualizar',
  templateUrl: './actualizar.component.html',
  styleUrls: ['./actualizar.component.css']
})
export class ActualizarComponent implements OnInit{
  tiposContribuyente?:TipoContribuyente[];
  tiposDocumento?:TipoDocumento[];
  entidades?:Entidad[];
  entidad = new Entidad();

  constructor(private entidadService:EntidadService, private tipoDocumentoService:TipoDocumentoService, private tipoContribuyenteService:TipoContribuyenteService, private router:Router){
    this.entidades=[];
  }
  ngOnInit(): void {
    this.getTiposDocumento();
    this.getTiposContribuyente();
    this.editar();
  }

  editar(){
    let id = JSON.parse(localStorage.getItem('id') as string);
    this.entidadService.obtenerEntidad(id).subscribe(
      data=>{this.entidad = data;
      });
  }

  actualizarEntidad(entidad:Entidad){
    this.entidadService.actualizarEntidad(entidad).subscribe(dato=>{
      this.entidad = dato;
      this.router.navigate(['entidad']);
    });
  }

  getTiposDocumento() {
    this.tipoDocumentoService.obtenerListaDeTiposDocumento().subscribe(
      data => {
        this.tiposDocumento = data;
        console.log(data);
      },
      error => {
        console.log(error);
      }
    );
  }

  getTiposContribuyente() {
    this.tipoContribuyenteService.obtenerListaDeTiposContribuyente().subscribe(
      data => {
        this.tiposContribuyente = data;
        console.log(data);
      },
      error => {
        console.log(error);
      }
    );
  }
}
