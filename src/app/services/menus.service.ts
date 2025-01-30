import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class MenusService {
  private jsonUrl = 'assets/json/datosPlatos.json';

  constructor(private http: HttpClient) { }

  obtenerPlatos(): Observable<Product[]> {
    return this.http.get<Product[]>(this.jsonUrl);
  }
}
