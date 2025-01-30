import { MenusService } from 'src/app/services/menus.service';
import { Component,OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/model/product';



@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss'],

})
export class ProductosComponent implements OnInit {
  verListaProductos:boolean=false;
  platos: Product[] = [];
  platosFiltrados: Product[] = [];
  tipoMenuSeleccionado: string = '';
  opcionSeleccionada: string = '';
  opcionAntigua: string='';
  platosSeleccionados: any[] = [];
  constructor(private menusService: MenusService, private route: ActivatedRoute) {}

//Eskatutako produktuen zerrenda erakutsi edo ezkutatu
verLista(){
  this.verListaProductos=true;
  this.opcionAntigua=this.opcionSeleccionada;
  this.opcionSeleccionada='';
}
ocultarLista(){
  this.verListaProductos=false;
  this.opcionSeleccionada=this.opcionAntigua;
}

//Datuak kargatu eta rutako parametroa jaso, menu edo plato aukeratu den jakiteko
ngOnInit() {
  this.menusService.obtenerPlatos().subscribe((data: Product[]) => {
    console.log("Platos cargados:", data);
    this.platos = data;
  });
  this.route.params.subscribe(params => {
    this.opcionSeleccionada = params['opcion'];
    console.log(this.opcionSeleccionada);
  });
}
//Zerrendara platerak gehitu
agregarPlato(plato: any) {
  const platoExistente = this.platosSeleccionados.find(p => p.id === plato.id);
  if (platoExistente) {
    platoExistente.cantidad++;
  } else {
    this.platosSeleccionados.push({ ...plato, cantidad: 1 });
  }
}

//Menuko select-a
filtrarPlatos(event: any) {
  this.tipoMenuSeleccionado = event.target.value;
  this.platosFiltrados = this.platos;

  console.log('Tipo de menú seleccionado:', this.tipoMenuSeleccionado);
  if (this.tipoMenuSeleccionado === '') {
    this.platosFiltrados = []; // No mostrar platos si no hay seleccion
  } else if (this.tipoMenuSeleccionado === 'basico') {
    this.platosFiltrados = this.platos.filter(plato => plato.basico);
  } else if (this.tipoMenuSeleccionado === 'especial') {
    this.platosFiltrados = this.platos.filter(plato => plato.especial);
  } else {
    this.platosFiltrados = this.platos;
  }
}
//Datuak ezabatu zerrendatik
anularPedido() {
  this.platosSeleccionados = [];
}
  }

