import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Urls } from 'src/app/shared/Urls';
import { Observable } from 'rxjs';
import { ClienteClass } from 'src/app/model/cliente/ClienteClass';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  baseUrl = Urls.baseUrl + Urls.cliente;
  constructor(private http:HttpClient) {  }

  getClientes():Observable<ClienteClass[]>{
    var endPoint = this.baseUrl + Urls.getTodos;
    return this.http.get<ClienteClass[]>(endPoint);
  }

  insertCliente(cliente:ClienteClass):Observable<any>{
    var endPoint = this.baseUrl + Urls.insert;
    return this.http.post(endPoint, cliente);
  }

  getClienteById(id:String):Observable<ClienteClass>{
    var endPoint = this.baseUrl + Urls.getById + id;
    return this.http.get<ClienteClass>(endPoint);
  }

  updateCliente(cliente:ClienteClass, id:String):Observable<any>{
    var endPoint = this.baseUrl + Urls.updateById + id;
    return this.http.put(endPoint,cliente);
  }
}
