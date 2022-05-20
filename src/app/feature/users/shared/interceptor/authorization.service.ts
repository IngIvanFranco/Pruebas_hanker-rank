import { HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService implements HttpInterceptor{

  constructor() { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
   
    let token
if ( localStorage.getItem('token')===null ) {
   token = ''
}    else {
  token = localStorage.getItem('token')
}

req =req.clone({
setHeaders:{'Authorization':token}
})
console.log("interceptor "+token);
    return next.handle(req);
  }
}
