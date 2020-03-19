import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Cliente } from 'src/app/model/Cliente';
import { Globals } from 'src/app/shared/Globals';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  baseUrl = Globals.baseUrl + Globals.cliente;
  constructor(private http:HttpClient) {  }

  getClientes():Observable<Cliente[]>{
    var endPoint = this.baseUrl + Globals.getTodos;
    return this.http.get<Cliente[]>(endPoint);
  }
}
