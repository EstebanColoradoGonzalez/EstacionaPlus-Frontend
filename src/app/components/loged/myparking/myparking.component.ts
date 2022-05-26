import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { State } from '@popperjs/core';
import { City } from 'src/app/models/City';
import { Parking, ResponseRequestParking } from 'src/app/models/Parking';
import { User } from 'src/app/models/User';
import { UserParkingService } from 'src/app/services/models/userparking.service';

@Component({
  selector: 'app-myparking',
  templateUrl: './myparking.component.html',
  styleUrls: ['./myparking.component.scss']
})
export class MyparkingComponent implements OnInit
{
  user: User = new User();
  parking: Parking | undefined;
  states: Array<State> = [];
  cities: Array<City> = [];
  parkings: Array<Parking> = [];

  alertNameInput: boolean = false;
  alertNITInput: boolean = false;
  alertAddressInput: boolean = false;
  stateSelected: boolean = false;
  citySelected: boolean = false;
  cityField: boolean = false;
  alertCarPlacesInput: boolean = false;
  alertMotoPlacesInput: boolean = false;
  alertSignUpFailed: boolean = false;
  alertStateInput: boolean = false;
  alertCityInput: boolean = false;

  message: String = "";

  formRecordParking = new FormGroup
  ({
    name: new FormControl('', Validators.required),
    nit: new FormControl('', Validators.required),
    address: new FormControl('', Validators.required),
    phone: new FormControl('', Validators.required),
    state: new FormControl('', Validators.required),
    city: new FormControl('', Validators.required),
    autoPlaces: new FormControl('', Validators.required),
    motoPlaces: new FormControl('', Validators.required)
  });

  constructor(private route: ActivatedRoute, private userParkingService: UserParkingService)
  {

  }

  ngOnInit(): void
  {
    console.log();
  }

  onClickModifyParking(): void
  {

  }

  captureState(): void
  {

  }

  captureCity(): void
  {

  }
}
