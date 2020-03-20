import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Cliente } from 'src/app/model/Cliente';
import { Urls } from 'src/app/shared/Urls';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  baseUrl = Urls.baseUrl + Urls.cliente;
  constructor(private http:HttpClient) {  }

  getClientes():Observable<Cliente[]>{
    var endPoint = this.baseUrl + Urls.getTodos;
    return this.http.get<Cliente[]>(endPoint);
  }
}
