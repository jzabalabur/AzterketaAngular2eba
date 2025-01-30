import { Component,EventEmitter,OnInit, Output, Input } from '@angular/core';
import { Product } from 'src/app/model/product';
import { MenusService } from 'src/app/services/menus.service';
import { Route,Router } from '@angular/router';
@Component({
  selector: 'app-lista-pedidos',
  templateUrl: './lista-pedidos.component.html',
  styleUrls: ['./lista-pedidos.component.scss']
})
export class ListaPedidosComponent implements OnInit {
  @Input() platosSeleccionados: any[] = [];
  @Output() cerrarListaEvent = new EventEmitter<void>();
  @Output() anularPedidoEvent = new EventEmitter<void>();
  constructor() {  }
  ngOnInit(): void {

  }


  cerrarLista() {
    this.cerrarListaEvent.emit();
  }
  borrarPedido() {
    this.anularPedidoEvent.emit();
  }
}
