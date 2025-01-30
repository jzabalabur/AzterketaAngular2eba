import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { FacturaComponent } from './components/factura/factura.component';
import { ProductosComponent } from './components/productos/productos.component';
import { ListaPedidosComponent } from './components/lista-pedidos/lista-pedidos.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'factura', component: FacturaComponent},
  {path: 'listapedidos', component: ListaPedidosComponent},
  {path: 'productos/:opcion', component: ProductosComponent},

  {path:'**', pathMatch:'full', redirectTo:'home'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
