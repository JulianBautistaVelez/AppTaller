import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Dinero } from 'src/app/model/Dinero';
import { Globals } from 'src/app/shared/Globals';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DineroService {

  constructor(private http:HttpClient) { }

  getDinero():Observable<Dinero>{
    var url = Globals.baseUrl + Globals.getDineroUrl;
    return this.http.get<Dinero>(url);
  }
}
