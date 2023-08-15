import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Entidad } from 'src/app/data/schema/entidad';
import { TipoContribuyente } from 'src/app/data/schema/tipocontribuyente';
import { TipoDocumento } from 'src/app/data/schema/tipodocumento';
import { EntidadService } from 'src/app/data/service/entidad.service';
import { TipoContribuyenteService } from 'src/app/data/service/tipocontribuyente.service';
import { TipoDocumentoService } from 'src/app/data/service/tipodocumento.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit{
  tiposContribuyente?:TipoContribuyente[];
  tiposDocumento?:TipoDocumento[];
  entidades?:Entidad[];
  entidad = new Entidad();

  constructor(private entidadService:EntidadService, private tipoDocumentoService:TipoDocumentoService, private tipoContribuyenteService:TipoContribuyenteService, private router:Router){
    this.entidades=[];
  }
  ngOnInit(): void {
    this.getObtenerEntidades();
    this.getTiposDocumento();
    this.getTiposContribuyente();
  }

 private getObtenerEntidades(){
    this.entidadService.obtenerListaDeEntidades().subscribe(
      data =>{ 
        this.entidades = data;
        console.log(data);
      },
      error => {
        console.log(error);
      }
    );
  }

  nuevaEntidad():void {
    this.router.navigate(['entidad/registrar']);
  }

  editarEntidad(entidad:Entidad):void {
    localStorage.setItem('id', entidad.idEntidad.toString());
    this.router.navigate(['entidad/actualizar']);
  }
  
  eliminarEntidad(entidad: Entidad): void {
    this.entidadService.eliminarEntidad(entidad).subscribe(
      () => {
        this.entidades = this.entidades!.filter(p => p !== entidad);
      },
      error => {
        console.log(error);
      }
    );
  }

  getTiposDocumento() {
    this.tipoDocumentoService.obtenerListaDeTiposDocumento().subscribe(
      data => {
        this.tiposDocumento = data;
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
      },
      error => {
        console.log(error);
      }
    );
  }
}
