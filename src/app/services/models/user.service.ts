import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../../models/User';

const urlAPI = 'http://localhost:8080/api/users/';
const urlGetByEmail = 'http://localhost:8080/api/users/user/';
const urlGetByEmailWithPassword = 'http://localhost:8080/api/users/user/email/';

@Injectable({
    providedIn: 'root'
})

export class UserService
{
    constructor(private http: HttpClient)
    {

    }

    getAll() : Observable<User>
    {
      return this.http.get<User>(urlAPI);
    }

    getByEmail(email: string) : Observable<User>
    {
      return this.http.get<User>(urlGetByEmail + email);
    }

    getByEmailWithPassword(email: string) : Observable<User>
    {
      return this.http.get<User>(urlGetByEmailWithPassword + email);
    }

    getByCode(code: number) : Observable<User>
    {
      return this.http.get<User>(urlAPI + code);
    }

    save(user: User)
    {
      return this.http.post<User>(urlAPI, user);
    }
}
