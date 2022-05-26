import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Reservation } from 'src/app/models/Reservation';

const urlAPI = 'http://localhost:8080/api/reservation';

@Injectable({
    providedIn: 'root'
})

export class ReservationService
{
    constructor(private http: HttpClient)
    {

    }

    getAll() : Observable<Reservation>
    {
      return this.http.get<Reservation>(urlAPI);
    }

    getByCode(code: number) : Observable<Reservation>
    {
      return this.http.get<Reservation>(urlAPI + code);
    }

    save(reservation: Reservation)
    {
      return this.http.post<Reservation>(urlAPI, reservation);
    }
}
