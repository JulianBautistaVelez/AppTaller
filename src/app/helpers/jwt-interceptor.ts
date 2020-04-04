import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { AuthenticationService } from '../services/authentication/authentication.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class JwtInterceptor implements HttpInterceptor{

    constructor(private authenticationService:AuthenticationService){  }

    intercept(req:HttpRequest<any>, next:HttpHandler):Observable<HttpEvent<any>> {
        let currentUser = this.authenticationService.currentUserValue;
        let authorizationToken;
        if( localStorage.getItem('JWST') != null){
            authorizationToken = "Bearer" + localStorage.getItem('JWST').slice(1,-1);
        } else authorizationToken = "Bearer";
        
        
        if(currentUser && localStorage.getItem('JWST')){
            req = req.clone({
                setHeaders:{
                    Authorization: authorizationToken
                }
            });
            console.log(req)
        }
        return next.handle(req);
    }
}