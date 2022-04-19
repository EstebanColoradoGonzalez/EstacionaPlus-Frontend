import { Vehicle } from './../../models/Vehicle';
import { UserService } from './../../services/userService';
import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import { User } from 'src/app/models/User';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent
{
  user: User = new User();
  password: string = "";

  formLogin = new FormGroup
  ({
    emailLogin: new FormControl('', Validators.required),
    passwordLogin: new FormControl('', Validators.required),
  });

  formSignin = new FormGroup
  ({
    names: new FormControl('', Validators.required),
    lastNames: new FormControl('', Validators.required),
    identificationNumber: new FormControl('', Validators.required),
    phone: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    typeVehicle: new FormControl('', Validators.required),
    license: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    confirmPassword: new FormControl('', Validators.required)
  });

  constructor(private userService: UserService)
  {

  }

  onClickRegister() : void
  {
    this.user.names = this.formSignin.get('names')?.value;
    this.user.lastNames = this.formSignin.get('lastNames')?.value;
    this.user.identificationNumber = this.formSignin.get('identificationNumber')?.value;
    this.user.phone = this.formSignin.get('phone')?.value;
    this.user.email = this.formSignin.get('email')?.value;
    this.user.password = this.formSignin.get('password')?.value;
    this.password = this.formSignin.get('confirmPassword')?.value;
    this.user.userRole.code = 1;
    this.user.userRole.name = 'ROLE_USER';
    this.user.vehicle.license = this.formSignin.get('license')?.value;
    this.user.vehicle.typeVehicle.code = 1;
    this.user.vehicle.typeVehicle.name = this.formSignin.get('typeVehicle')?.value;

    console.log(this.user);

    if(this.user.password === this.password)
    {
      this.userService.save(this.user).subscribe(response =>
      {
        console.log(response);
      });
    }
  }

  onLogin() : void
  {

  }
}
