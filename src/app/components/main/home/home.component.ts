import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/models/User';
import { UserService } from 'src/app/services/models/user.service';
import { Parking, ResponseRequestParking } from '../../../models/Parking';
import { ParkingService } from '../../../services/models/parking.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit
{
  parkings: Array<Parking> = [];
  code: number | undefined;
  user: User = new User();
  isLoged!: boolean;

  constructor(private parkingService: ParkingService, private userService: UserService, )
  {
    this.getAll();
  }

  ngOnInit(): void
  {
    this.getAll();

    if(localStorage.getItem('email') !== "")
    {
      this.isLoged = true
    }
    else
    {
      this.isLoged = false;
    }
  }

  private getAll()
  {
    this.parkingService.getAll().subscribe((response: ResponseRequestParking) => {
      this.parkings = response.data;
    })
  }
}
