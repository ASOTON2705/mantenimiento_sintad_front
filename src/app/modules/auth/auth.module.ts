import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/app.material.module';
import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './page/login/login.component';

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    FormsModule,
    MaterialModule,
    ReactiveFormsModule
  ],
})
export class AuthModule { }
