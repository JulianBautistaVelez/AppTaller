import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Urls } from 'src/app/shared/Urls';
import { Observable } from 'rxjs';
import { MovimientoClass } from 'src/app/model/movimiento/MovimientoClass';
import { RangoFechaClass } from 'src/app/model/shared/RangoFechaClass';

@Injectable({
  providedIn: 'root'
})
export class MovimientoService {

  baseUrl = Urls.baseUrl + Urls.movimiento;
  constructor(private http:HttpClient) { }

  inserMovimiento(movimiento:MovimientoClass):Observable<any>{
    var endPoint = this.baseUrl + Urls.insert
    return this.http.post(endPoint, movimiento);
  }

  getMovimientos():Observable<MovimientoClass[]>{
    var endPoint = this.baseUrl + Urls.getTodos;
    return this.http.get<MovimientoClass[]>(endPoint);
  }

  getGastos(){
    //TODO implementar :)
  }

  getIngresos(){
    //TODO implementar :)
  }

}