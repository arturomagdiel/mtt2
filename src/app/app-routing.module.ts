import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
	{ path: 'heroe', loadChildren: () => import('./heroes/heroe/heroe.module').then(m => m.HeroeModule) },
	{ path: 'listado', loadChildren: () => import('./heroes/listado/listado.module').then(m => m.ListadoModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
