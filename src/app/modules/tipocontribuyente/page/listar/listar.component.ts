import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TipoContribuyente } from 'src/app/data/schema/tipocontribuyente';
import { TipoContribuyenteService } from 'src/app/data/service/tipocontribuyente.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent {

  tiposContribuyente?:TipoContribuyente[];
  tipoContribuyente = new TipoContribuyente();


  constructor(private tipoContribuyenteService:TipoContribuyenteService, private router:Router){
    this.tiposContribuyente=[];
  }

  ngOnInit(): void {
    this.getObtenerTiposContribuyente;
  }

 private getObtenerTiposContribuyente(){
    this.tipoContribuyenteService.obtenerListaDeTiposContribuyente().subscribe(
      data =>{ 
        this.tiposContribuyente = data;
        console.log(data);
      },
      error => {
        console.log(error);
      }
    );
  }

  nuevoTipoContribuyente():void {
    this.router.navigate(['tipo-contribuyente/registrar']);
  }

  editarTipoContribuyente(tipoContribuyente:TipoContribuyente):void {
    localStorage.setItem('id', tipoContribuyente.idTipoContribuyente.toString());
    this.router.navigate(['tipo-contribuyente/actualizar']);
  }
  
  eliminarTipoContribuyente(tipoContribuyente:TipoContribuyente):void {
    this.tipoContribuyenteService.eliminarTipoContribuyente(tipoContribuyente).subscribe(
      data=>{this.tiposContribuyente=this.tiposContribuyente!.filter(p=>p!==tipoContribuyente)}
    )
  }
}
