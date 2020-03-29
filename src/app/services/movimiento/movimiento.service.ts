import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Urls } from 'src/app/shared/Urls';
import { Observable } from 'rxjs';
import { MovimientoClass } from 'src/app/model/movimiento/MovimientoClass';
import { RangoFechaClass } from 'src/app/model/shared/RangoFechaClass';
import { TipoMovimiento } from 'src/app/shared/TipoMovimiento';


@Injectable({
  providedIn: 'root'
})
export class MovimientoService {

  baseUrl = Urls.baseUrl + Urls.movimiento;
  
  constructor(private http:HttpClient) { }

  inserMovimiento(movimiento:MovimientoClass):Observable<any>{
    var endPoint = this.baseUrl + Urls.insert;
    return this.http.post(endPoint, movimiento);
  }

  insertMultiMovimiento(movimientos:MovimientoClass[]):Observable<any>{
    var endPoint = this.baseUrl + Urls.insert + Urls.insertMulti;
    return this.http.post<any>(endPoint, movimientos);
  }

  getMovimientos(fechas:RangoFechaClass):Observable<MovimientoClass[]>{
    var endPoint = this.baseUrl + Urls.getTodos + Urls.getRangeOfTime;
    return this.http.post<MovimientoClass[]>(endPoint, fechas);
  }

  getGastos(fechas:RangoFechaClass):Observable<MovimientoClass[]>{
    return this.getMovimientosByTipoRangeOfTime(TipoMovimiento.gasto, fechas);
  }

  getIngresos(fechas:RangoFechaClass):Observable<MovimientoClass[]>{
    return this.getMovimientosByTipoRangeOfTime(TipoMovimiento.ingreso, fechas);
  }

  getMovimientosByTipoRangeOfTime(tipo:TipoMovimiento, fechas:RangoFechaClass){
    var gastoIngreso = tipo === TipoMovimiento.gasto? Urls.getGastos: Urls.getIngresos;
    var endPoint = 
      this.baseUrl +
      Urls.getTodos + 
      gastoIngreso + 
      Urls.getRangeOfTime;
    return this.http.post<MovimientoClass[]>(endPoint, fechas);
  }

  getMovimientoById(id:String):Observable<MovimientoClass>{
    var endPoint = this.baseUrl + Urls.getById + id;
    return this.http.get<MovimientoClass>(endPoint);
  }

  deleteMovimiento(id:String):Observable<any>{
    var endPoint = this.baseUrl + Urls.deleteById + id;
    return this.http.delete(endPoint);
  }

}