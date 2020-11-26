import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CatalogoComponent } from './pages/catalogo/catalogo.component';
import { NosotrosComponent } from './pages/nosotros/nosotros.component';
import { ProductoComponent } from './pages/producto/producto.component';

const app_routes: Routes = [

  {path: 'home', component: CatalogoComponent},
  {path: 'nosotros', component: NosotrosComponent},
  {path: 'producto', component: ProductoComponent},
  {path: '**',pathMatch: 'full', redirectTo: 'home'}

];

@NgModule({
  imports: [
    RouterModule.forRoot(app_routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
