import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Entidad } from 'src/app/data/schema/entidad';
import { TipoContribuyente } from 'src/app/data/schema/tipocontribuyente';
import { TipoDocumento } from 'src/app/data/schema/tipodocumento';
import { EntidadService } from 'src/app/data/service/entidad.service';
import { TipoContribuyenteService } from 'src/app/data/service/tipocontribuyente.service';
import { TipoDocumentoService } from 'src/app/data/service/tipodocumento.service';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css']
})
export class RegistrarComponent implements OnInit{
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
  }

  guardarEntidad(entidad: Entidad){
    this.entidadService.registrarEntidad(entidad).subscribe(data => {
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
