import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/app.material.module';
import { ActualizarComponent } from './page/actualizar/actualizar.component';
import { ListarComponent } from './page/listar/listar.component';
import { RegistrarComponent } from './page/registrar/registrar.component';
import { UsuarioRoutingModule } from './usuario-routing.module';


@NgModule({
  declarations: [
    ActualizarComponent,
    RegistrarComponent,
    ListarComponent
  ],
  imports: [
    CommonModule,
    UsuarioRoutingModule,
    FormsModule,
    MaterialModule
  ]
})
export class UsuarioModule { }
