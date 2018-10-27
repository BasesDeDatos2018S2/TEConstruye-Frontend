import { Injectable, Injector } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/observable/throw'
import 'rxjs/add/operator/catch';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  intercept (req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const authReq = req.clone({
      headers: req.headers.set('Authorization',
      'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6IjEiLCJyb2xlIjoiQWRtaW5pc3RyYWRvciIsIm5iZiI6MTU0MDYyNDQ0MSwiZXhwIjoxNTQwNjI2MjQxLCJpYXQiOjE1NDA2MjQ0NDEsImlzcyI6Imh0dHA6Ly9sb2NhbGhvc3Q6NTAzNTQiLCJhdWQiOiJodHRwOi8vbG9jYWxob3N0OjUwMzU0In0.IG9IagxX_ch1q_VEGXRh-WXW6OHkipDuSQT_FN91B04')
    });
    return next.handle(authReq);
  }

}
