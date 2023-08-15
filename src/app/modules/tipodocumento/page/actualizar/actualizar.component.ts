import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TipoDocumento } from 'src/app/data/schema/tipodocumento';
import { TipoDocumentoService } from 'src/app/data/service/tipodocumento.service';

@Component({
  selector: 'app-actualizar',
  templateUrl: './actualizar.component.html',
  styleUrls: ['./actualizar.component.css']
})
export class ActualizarComponent {

  tipoDocumento = new TipoDocumento();
   
  constructor(private router: Router, private tipoDocumentoService: TipoDocumentoService){}
  ngOnInit(): void {
    this.editar();
  }

  editar(){
    let id = JSON.parse(localStorage.getItem('id') as string);
    this.tipoDocumentoService.obtenerTipoDocumento(id).subscribe(
      data=>{this.tipoDocumento = data;
      });
  }

  actualizarTipoDocumento(tipoDocumento:TipoDocumento){
    this.tipoDocumentoService.actualizarTipoDocumento(tipoDocumento).subscribe(dato=>{
      this.tipoDocumento = dato;
      this.router.navigate(['tipo-documento']);
    });
  }
}
