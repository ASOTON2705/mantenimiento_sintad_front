import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/app.material.module';
import { ActualizarComponent } from './page/actualizar/actualizar.component';
import { ListarComponent } from './page/listar/listar.component';
import { RegistrarComponent } from './page/registrar/registrar.component';
import { TipoUsuarioRoutingModule } from './tipousuario-routing.module';


@NgModule({
  declarations: [
    ListarComponent,
    RegistrarComponent,
    ActualizarComponent
  ],
  imports: [
    CommonModule,
    TipoUsuarioRoutingModule,
    FormsModule,
    MaterialModule
  ]
})
export class TipoUsuarioModule { }
