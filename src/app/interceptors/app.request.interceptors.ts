import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import {Router} from '@angular/router';
import {tap} from 'rxjs/operators';
import { Login } from '../models/Login';

@Injectable()
export class XhrInterceptor implements HttpInterceptor
{
  user = new Login();

  constructor(private router: Router)
  {

  }

  intercept(req: HttpRequest<any>, next: HttpHandler)
  {
    let httpHeaders = new HttpHeaders();
    var d= localStorage.getItem('userdetails') as string;
    this.user = JSON.parse(d);

    if(this.user && this.user.password && this.user.email)
    {
      httpHeaders = httpHeaders.append('Authorization', 'Basic ' + btoa(this.user.email + ':' + this.user.password));
    }

    localStorage.removeItem('userdetails');
    let authorization = localStorage.getItem('Authorization');

    if(authorization)
    {
      httpHeaders = httpHeaders.append('Authorization', authorization);
    }

    httpHeaders = httpHeaders.append('X-Requested-With', 'XMLHttpRequest');

    const xhr = req.clone
    ({
      headers: httpHeaders
    });

    return next.handle(xhr).pipe(tap(() => {}, (err: any) =>
    {
      if (err instanceof HttpErrorResponse)
      {
        if (err.status !== 401)
        {
          return;
        }
        this.router.navigate(['dashboard']);
      }
    }));
  }
}
