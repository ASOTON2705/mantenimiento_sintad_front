import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/guard/auth.guard';
import { LoginGuard } from './core/guard/login.guard';
import { AuthLayoutComponent } from './layout/auth-layout/auth-layout.component';
import { ContentLayoutComponent } from './layout/content-layout/content-layout.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'auth/login',
    pathMatch: 'full'
  },
  {
    path: 'auth',
    component: AuthLayoutComponent,
    canActivate: [LoginGuard('usuario')],
    loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: '',
    component: ContentLayoutComponent,
    canActivate: [AuthGuard('auth/login')],
    children: [
      {
        path: 'entidad',
        loadChildren: () => import('./modules/entidad/entidad.module').then(m => m.EntidadModule)
      },
      {
        path: 'tipo-documento',
        loadChildren: () => import('./modules/tipodocumento/tipodocumento.module').then(m => m.TipoDocumentoModule)
      },
      {
        path: 'tipo-contribuyente',
        loadChildren: () => import('./modules/tipocontribuyente/tipocontribuyente.module').then(m => m.TipoContribuyenteModule)
      },
      {
        path: 'usuario',
        loadChildren: () => import('./modules/usuario/usuario.module').then(m => m.UsuarioModule)
      },
      {
        path: 'tipo-usuario',
        loadChildren: () => import('./modules/tipousuario/tipousuario.module').then(m => m.TipoUsuarioModule)
      }
    ]
  },
  {
    path: '**',
    redirectTo: 'auth/login',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
