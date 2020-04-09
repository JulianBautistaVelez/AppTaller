import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpEvent, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Usuario } from 'src/app/model/usuario/usuario';
import { Urls } from 'src/app/model/shared/Urls';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  currentUserSubject: BehaviorSubject<String>;
  currentUser:Observable<String>;
  baseUrl = Urls.baseUrl;


  constructor(private http:HttpClient) {
    this.currentUserSubject = 
      new BehaviorSubject<String>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue():String{
    return this.currentUserSubject.value;
  }

  login(usuario:Usuario){
    var endPoint = this.baseUrl  + Urls.login;
    return this.http.post<HttpEvent<any>>(endPoint, usuario, { observe: 'response' }).pipe(
      map(
        (response:HttpResponse<any>)=> {
          console.log(response);
          //TODO guardar datos de usuario y token en un sitio mas seguro que localStorage
          localStorage.setItem('currentUser', JSON.stringify(response.headers.get('usuarioId')));
          localStorage.setItem('JWST', JSON.stringify(response.headers.get('token')));
          this.currentUserSubject.next(response.headers.get('usuarioId'));
          return response;
        }
      )
    );
  }

  logout(){
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }
}
// Opcion: guardar token y usuarioId en un httpOnly cookie
// res.cookie("SESSIONID", jwtBearerToken, {httpOnly:true, secure:true});