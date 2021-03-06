import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpEvent, HttpHandler } from '@angular/common/http';
import { AuthenticationService } from '../services/authentication/authentication.service';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators'

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

    constructor(private authenticationService:AuthenticationService){}

    intercept(req:HttpRequest<any>, next:HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(req).pipe(
            catchError(
                    (err) =>{
                        if(err.status === 401 || err.status === 403){
                            this.authenticationService.logout();
                            location.reload;
                        }
                        const error = err.error.message || err.statusText;
                        return throwError(error);
                    }
                )
        )
    }
}
