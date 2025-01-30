import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MenusService } from './services/menus.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { ProductosComponent } from './components/productos/productos.component';
import { FacturaComponent } from './components/factura/factura.component';
import { ListaPedidosComponent } from './components/lista-pedidos/lista-pedidos.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ProductosComponent,
    FacturaComponent,
    ListaPedidosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule

  ],
  providers: [MenusService],
  bootstrap: [AppComponent]
})
export class AppModule { }
