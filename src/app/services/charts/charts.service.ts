import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Urls } from 'src/app/model/shared/Urls';
import { Observable } from 'rxjs';
import { LineChartClass } from 'src/app/model/charts/LineChartClass';
import { RangoFechaClass } from 'src/app/model/shared/RangoFechaClass';
import { PieChartClass } from 'src/app/model/charts/PieChartClass';

@Injectable({
  providedIn: 'root'
})
export class ChartsService {

  baseUrl = Urls.baseUrl + Urls.charts;

  constructor(private http:HttpClient) { }

  getLiquidez():Observable<LineChartClass>{
    var endPoint = this.baseUrl + Urls.getLineChartData;
    return this.http.get<LineChartClass>(endPoint);
  }

  getPieData(fechas:RangoFechaClass, gastoIngreso:String):Observable<PieChartClass>{
    var urlPart = 
      gastoIngreso === 'gasto'? Urls.getGastosPieChartData : Urls.getIngresosPieChartData;
    var endPoint = this.baseUrl + urlPart;
    return this.http.post<PieChartClass>(endPoint, fechas);
  }
}
