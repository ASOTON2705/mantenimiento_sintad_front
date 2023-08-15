import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TipoDocumento } from 'src/app/data/schema/tipodocumento';
import { TipoDocumentoService } from 'src/app/data/service/tipodocumento.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent {
  tiposDocumento?:TipoDocumento[];
  tipoDocumento = new TipoDocumento();


  constructor(private tipoDocumentoService:TipoDocumentoService, private router:Router){
    this.tiposDocumento=[];
  }

  ngOnInit(): void {
    this.getObtenerTiposDocumento;
  }

 private getObtenerTiposDocumento(){
    this.tipoDocumentoService.obtenerListaDeTiposDocumento().subscribe(
      data =>{ 
        this.tiposDocumento = data;
        console.log(data);
      },
      error => {
        console.log(error);
      }
    );
  }

  nuevoTipoDocumento():void {
    this.router.navigate(['tipo-documento/registrar']);
  }

  editarTipoDocumento(tipoDocumento:TipoDocumento):void {
    localStorage.setItem('id', tipoDocumento.idTipoDocumento.toString());
    this.router.navigate(['tipo-documento/actualizar']);
  }
  
  eliminarTipoDocumento(tipoDocumento:TipoDocumento):void {
    this.tipoDocumentoService.eliminarTipoDocumento(tipoDocumento).subscribe(
      data=>{this.tiposDocumento=this.tiposDocumento!.filter(p=>p!==tipoDocumento)}
    )
  }
}
