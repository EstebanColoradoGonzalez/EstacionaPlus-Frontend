import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Parking } from './../../../models/Parking';
import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/User';
import { UserService } from 'src/app/services/models/user.service';
import { State } from 'src/app/models/State';
import { City } from 'src/app/models/City';

@Component({
  selector: 'app-header-loged',
  templateUrl: './header-loged.component.html',
  styleUrls: ['./header-loged.component.scss']
})
export class HeaderLogedComponent implements OnInit
{
  user: User = new User();
  parking: Parking = new Parking();
  states: Array<State> = [];
  cities: Array<City> = [];

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

  constructor(private userService: UserService)
  {

  }

  ngOnInit(): void
  {
    this.getUser();
  }

  captureState(): void
  {

  }

  captureCity(): void
  {

  }

  onClickRegister(): void
  {

  }

  onLogOut(): void
  {
    window.localStorage.setItem("Authorization", "");
    window.localStorage.setItem("email", "");
    window.location.href= '/home';
  }

  getUser(): void
  {
    let email = localStorage.getItem('email');

    this.userService.getByEmail(email!).subscribe(response =>
    {
      this.user = response.data[0];
      console.log(response);
    })
  }
}
