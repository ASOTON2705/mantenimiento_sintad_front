import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TipoDocumento } from 'src/app/data/schema/tipodocumento';
import { TipoDocumentoService } from 'src/app/data/service/tipodocumento.service';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css']
})
export class RegistrarComponent {
  modelTipoDocumento = new TipoDocumento();

  constructor(private router: Router, private tipoDocumentoService: TipoDocumentoService){}
  ngOnInit(): void {
  }

  guardarTipoDocumento( tipoDocumento: TipoDocumento) {
    this.tipoDocumentoService.registrarTipoDocumento(tipoDocumento).subscribe(data => {
      this.router.navigate(['tipo-documento']);
    });
  }
}
