import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TipoContribuyente } from 'src/app/data/schema/tipocontribuyente';
import { TipoContribuyenteService } from 'src/app/data/service/tipocontribuyente.service';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css']
})
export class RegistrarComponent {

  modelTipoContribuyente = new TipoContribuyente();

  constructor(private router: Router, private tipoContribuyenteService: TipoContribuyenteService){}
  ngOnInit(): void {
  }

  guardarTipoContribuyente( tipoContribuyente: TipoContribuyente) {
    this.tipoContribuyenteService.registrarTipoContribuyente(tipoContribuyente).subscribe(data => {
      this.router.navigate(['tipo-contribuyente']);
    });
  }

}
