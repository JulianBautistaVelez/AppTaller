import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Dinero } from 'src/app/model/dinero/Dinero';
import { Urls } from 'src/app/shared/Urls';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DineroService {

  baseUrl = Urls.baseUrl + Urls.dinero;
  constructor(private http:HttpClient) { }

  getDinero():Observable<Dinero>{
    var endPoint = this.baseUrl + Urls.getDineroActual;
    return this.http.get<Dinero>(endPoint);
  }
}
