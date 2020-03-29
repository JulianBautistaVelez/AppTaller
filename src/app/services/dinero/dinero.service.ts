import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Urls } from 'src/app/shared/Urls';
import { Observable } from 'rxjs';
import { DineroClass } from 'src/app/model/dinero/DineroClass';

@Injectable({
  providedIn: 'root'
})
export class DineroService {

  baseUrl = Urls.baseUrl + Urls.dinero;
  constructor(private http:HttpClient) { }

  getDinero():Observable<DineroClass>{
    var endPoint = this.baseUrl + Urls.getDineroActual;
    return this.http.get<DineroClass>(endPoint);
  }
}
