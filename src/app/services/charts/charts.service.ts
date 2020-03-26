import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Urls } from 'src/app/shared/Urls';
import { Observable } from 'rxjs';
import { LineChartClass } from 'src/app/model/charts/LineChartClass';

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
}
