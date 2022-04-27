import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Parking } from '../../models/Parking';

const urlAPI = 'http://localhost:8080/api/parkings';

@Injectable({
    providedIn: 'root'
})

export class ParkingService
{
    constructor(private http: HttpClient)
    {

    }

    getAll() : Observable<Parking>
    {
        return this.http.get<Parking>(urlAPI);
    }
}
