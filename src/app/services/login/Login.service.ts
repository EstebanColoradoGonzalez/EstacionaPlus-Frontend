import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Login } from '../../models/Login';

const urlLogin = 'http://localhost:8080/api/login';

@Injectable({
    providedIn: 'root'
})
export class LoginService
{
  constructor(private http: HttpClient)
  {

  }

  validateCredentials(login: Login)
  {
    window.localStorage.setItem("userdetails",JSON.stringify(login));
    return this.http.post<Login>(urlLogin, login);
  }
}
