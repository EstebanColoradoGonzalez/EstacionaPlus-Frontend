import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Parking, ResponseRequestParking } from 'src/app/models/Parking';
import { HomeComponent } from '../home/home.component';
import { ParkingService } from '../../services/parkingService';

@Component({
  selector: 'app-parking',
  templateUrl: './parking.component.html',
  styleUrls: ['./parking.component.scss']
})
export class ParkingComponent implements OnInit
{
  parking: Parking | undefined;
  parkings: Array<Parking> = [];

  constructor(private route: ActivatedRoute, private parkingService: ParkingService)
  {

  }

  ngOnInit(): void
  {
    this.parkingService.getAll().subscribe((response: ResponseRequestParking) =>{
      this.parkings = response.data;

      const routeParams = this.route.snapshot.paramMap;
      const parkingCodeFromRoute = Number(routeParams.get('parkingCode'));

      this.parking = this.parkings.find((parking) => parking.code === parkingCodeFromRoute);
    });
  }

  private getAll()
  {
    this.parkingService.getAll().subscribe((response: ResponseRequestParking) =>{
      this.parkings = response.data;
    });
  }
}
