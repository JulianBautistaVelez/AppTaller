import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Urls } from 'src/app/shared/Urls';
import { FacturaClass } from 'src/app/model/factura/FacturaClass';
import { Observable } from 'rxjs';
import { RangoFechaClass } from 'src/app/model/shared/RangoFechaClass';

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

  updateFactura(factura:FacturaClass, id:String):Observable<any>{
    var endPoint = this.baseUrl + Urls.updateById + id;
    console.log(factura);
    return this.http.put(endPoint, factura);
  }

  getFacturas(fechas:RangoFechaClass):Observable<FacturaClass[]>{
    var endPoint = this.baseUrl + Urls.getTodos + Urls.getRangeOfTime;
    return this.http.post<FacturaClass[]>(endPoint, fechas);
  }

  getFacturaById(id:String):Observable<FacturaClass>{
    var endPoint = this.baseUrl + Urls.getTodos + id;
    return this.http.get<FacturaClass>(endPoint);
  }
}

