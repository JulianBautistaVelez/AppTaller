import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Urls } from 'src/app/shared/Urls';
import { TelaClass } from 'src/app/model/tela/TelaClass';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TelaService {

  baseUrl = Urls.baseUrl + Urls.tela;

  constructor(private http:HttpClient) { }

  insertTela(tela:TelaClass):Observable<any>{
    var endPoint = this.baseUrl + Urls.insert;
    return this.http.post(endPoint, tela);
  }

  getTelas():Observable<TelaClass[]>{
    var endPoint = this.baseUrl + Urls.getTodos;
    return this.http.get<TelaClass[]>(endPoint);
  }

  getTelaById(id:String):Observable<TelaClass>{
    var endPoint = this.baseUrl + Urls.getById + id;
    return this.http.get<TelaClass>(endPoint);
  }

  getTelasByWord(query:String):Observable<TelaClass[]>{
    var endPoint = this.baseUrl + Urls.getByQuery + query;
    return this.http.get<TelaClass[]>(endPoint);
  }

  updateTela(tela:TelaClass, id:String):Observable<any>{
    var endPoint = this.baseUrl + Urls.updateById + id;
    return this.http.put(endPoint,tela);
  }

  deleteTela(id:String):Observable<any>{
    var endPoint = this.baseUrl + Urls.deleteById + id;
    return this.http.delete(endPoint);
  }
}
