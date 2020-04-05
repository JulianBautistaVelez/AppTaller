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
        let headers;
        if(currentUser && localStorage.getItem('JWST') != null){
            authorizationToken = "Bearer" + localStorage.getItem('JWST').slice(1,-1);
             headers={
                'Content-Type': 'application/json',
                'Authorization': authorizationToken
            }
        } else headers={
            'Content-Type': 'application/json'
        }
        
        req = req.clone({
            setHeaders:headers
        });

        return next.handle(req);
    }
}