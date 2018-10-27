import { Injectable, Injector } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/observable/throw'
import 'rxjs/add/operator/catch';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor() {
    console.log("Injectable creado ");
    // let tok:string= "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6IjEiLCJyb2xlIjoiQWRtaW5pc3RyYWRvciIsIm5iZiI6MTU0MDYyNzI2OCwiZXhwIjoxNTQwNjI5MDY4LCJpYXQiOjE1NDA2MjcyNjgsImlzcyI6Imh0dHA6Ly9sb2NhbGhvc3Q6NTAzNTQiLCJhdWQiOiJodHRwOi8vbG9jYWxob3N0OjUwMzU0In0.M3SIO0G2M5d1utUmVSrht1Jfaw1-dq0S_zoqIBBSCDs"
    // localStorage.setItem('token', JSON.stringify("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6IjMwNDkyMDg3NyIsInJvbGUiOiJBZG1pbmlzdHJhZG9yIiwibmJmIjoxNTQwNjQwMjQ1LCJleHAiOjE1NDA2NDIwNDUsImlhdCI6MTU0MDY0MDI0NSwiaXNzIjoiaHR0cDovL2xvY2FsaG9zdDo1MDM1NCIsImF1ZCI6Imh0dHA6Ly9sb2NhbGhvc3Q6NTAzNTQifQ.cDqFlOuel9AeeRnj7tEZwu1f9eF4gzP0Bq65t_yAbyM"));
    // localStorage.setItem('token', JSON.stringify(""));
    if (localStorage.getItem("token") === null) {
      localStorage.setItem('token', JSON.stringify(""));
      console.log("token:", localStorage.getItem("token"));
    }
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let token = JSON.parse(localStorage.getItem("token"));
    if (token) {
      token = "Bearer " + token;
    }
    console.log("TOKEN:", token);

    const authReq = req.clone({
      headers: req.headers.set('Authorization', token)
    });
    return next.handle(authReq);
  }

}
