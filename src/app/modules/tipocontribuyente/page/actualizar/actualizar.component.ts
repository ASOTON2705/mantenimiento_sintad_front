import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TipoContribuyente } from 'src/app/data/schema/tipocontribuyente';
import { TipoContribuyenteService } from 'src/app/data/service/tipocontribuyente.service';

@Component({
  selector: 'app-actualizar',
  templateUrl: './actualizar.component.html',
  styleUrls: ['./actualizar.component.css']
})
export class ActualizarComponent {

  tipoContribuyente = new TipoContribuyente();
   
  constructor(private router: Router, private tipoContribuyenteService: TipoContribuyenteService){}
  ngOnInit(): void {
    this.editar();
  }

  editar(){
    let id = JSON.parse(localStorage.getItem('id') as string);
    this.tipoContribuyenteService.obtenerTipoContribuyente(id).subscribe(
      data=>{this.tipoContribuyente = data;
      });
  }

  actualizarTipoContribuyente(tipoContribuyente:TipoContribuyente){
    this.tipoContribuyenteService.actualizarTipoContribuyente(tipoContribuyente).subscribe(dato=>{
      this.tipoContribuyente = dato;
      this.router.navigate(['tipo-contribuyente']);
    });
  }
}
