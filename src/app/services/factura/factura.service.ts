import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Urls } from 'src/app/shared/Urls';
import { FacturaClass } from 'src/app/model/factura/FacturaClass';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FacturaService {

  baseUrl = Urls.baseUrl + Urls.factura;

  constructor(private http:HttpClient) { }

  insertFactura(factura:FacturaClass):Observable<any>{
    var endPoint = this.baseUrl + Urls.insert;
    return this.http.post(endPoint, factura);
  }
}
