import { Component, OnInit } from '@angular/core';
import { Parking, ResponseRequestParking } from '../../models/Parking';
import { ParkingService } from '../../services/parkingService';
import {FormControl, FormGroup, FormGroupDirective, NgForm, Validators} from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit
{
  parkings: Array<Parking> = [];
  code: number | undefined;

  constructor(private parkingService: ParkingService)
  {
    this.getAll();
  }

  ngOnInit(): void
  {
    this.getAll();
  }

  private getAll()
  {
    this.parkingService.getAll().subscribe((response: ResponseRequestParking) => {
      this.parkings = response.data;
    })
  }
}
