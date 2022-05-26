import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserParking } from 'src/app/models/UserParking';

const urlAPI = 'http://localhost:8080/api/admins/';

@Injectable({
    providedIn: 'root'
})

export class UserParkingService
{
    constructor(private http: HttpClient)
    {

    }

    getAll() : Observable<UserParking>
    {
      return this.http.get<UserParking>(urlAPI);
    }

    getByCode(code: number) : Observable<UserParking>
    {
      return this.http.get<UserParking>(urlAPI + code);
    }

    save(admin: UserParking)
    {
      return this.http.post<UserParking>(urlAPI, admin);
    }
}
