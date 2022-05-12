import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Login } from 'src/app/models/Login';
import { User } from 'src/app/models/User';
import { LoginService } from 'src/app/services/login/Login.service';
import { UserService } from '../../../services/models/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  template: '<app-home [isLoged]="isLog"></app-home>',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit
{
  user: User = new User();
  userLogon: User = new User();
  login: Login = new Login();
  password: string = "";
  message: string = "";
  alertEmailLoginInput: boolean = false;
  alertPasswordLoginInput: boolean = false;
  alertWrongCredentials: boolean = false;
  alertNameSigninInput: boolean = false;
  alertLastNamesSigninInput: boolean = false;
  alertIdentificationNumberSigninInput: boolean = false;
  alertPhoneSigninInput: boolean = false;
  alertEmailSigninInput: boolean = false;
  alertTypeVehicleSigninInput: boolean = false;
  alertLicenseSigninInput: boolean = false;
  alertPasswordSigninInput: boolean = false;
  alertConfirmPasswordSigninInput: boolean = false;
  alertSignUpSuccessful: boolean = false;
  alertSignUpFailed: boolean = false;

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

  constructor(public http: HttpClient, private userService: UserService, private loginService: LoginService, private router: Router)
  {

  }

  ngOnInit(): void
  {
    this.alertEmailLoginInput = false;
    this.alertPasswordLoginInput = false;
    this.alertWrongCredentials = false;
    this.alertNameSigninInput = false;
    this.alertLastNamesSigninInput = false;
    this.alertIdentificationNumberSigninInput  = false;
    this.alertPhoneSigninInput  = false;
    this.alertEmailSigninInput  = false;
    this.alertTypeVehicleSigninInput  = false;
    this.alertLicenseSigninInput  = false;
    this.alertPasswordSigninInput  = false;
    this.alertConfirmPasswordSigninInput  = false;
    this.alertSignUpSuccessful  = false;
    this.alertSignUpFailed = false;
  }

  onClickRegister() : void
  {
    this.alertNameSigninInput = false;
    this.alertLastNamesSigninInput = false;
    this.alertIdentificationNumberSigninInput  = false;
    this.alertPhoneSigninInput  = false;
    this.alertEmailSigninInput  = false;
    this.alertTypeVehicleSigninInput  = false;
    this.alertLicenseSigninInput  = false;
    this.alertPasswordSigninInput  = false;
    this.alertConfirmPasswordSigninInput  = false;
    this.alertSignUpSuccessful  = false;
    this.alertSignUpFailed = false;

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

    if(this.user.names === "")
    {
      this.alertNameSigninInput = true;
    }

    if(this.user.lastNames === "")
    {
      this.alertLastNamesSigninInput = true;
    }

    if(this.user.identificationNumber === "")
    {
      this.alertIdentificationNumberSigninInput = true;
    }

    if(this.user.phone === "")
    {
      this.alertPhoneSigninInput = true;
    }

    if(this.user.email === "")
    {
      this.alertEmailSigninInput = true;
    }

    if(this.user.vehicle.typeVehicle.name === "")
    {
      this.alertTypeVehicleSigninInput = true;
    }

    if(this.user.vehicle.license === "")
    {
      this.alertLicenseSigninInput = true;
    }

    if(this.user.password === "")
    {
      this.alertPasswordSigninInput = true;
    }

    if(this.password === "")
    {
      this.alertConfirmPasswordSigninInput = true;
    }

    if(this.user.password === this.password)
    {
      this.userService.save(this.user).subscribe(response =>
      {
        if(response.status === 'SUCCESSFUL')
        {
          this.alertSignUpSuccessful = true;
          console.log(response);
        }
        else
        {
          this.alertSignUpFailed = true;
        }

      });
    }
  }

  onLogin() : void
  {
    this.alertEmailLoginInput = false;
    this.alertPasswordLoginInput = false;
    this.alertWrongCredentials = false;

    this.login.email = this.formLogin.get('emailLogin')?.value;
    this.login.password = this.formLogin.get('passwordLogin')?.value;

    if(this.login.email === "")
    {
      this.alertEmailLoginInput = true;
    }

    if(this.login.password === "")
    {
      this.alertPasswordLoginInput = true;
    }

    this.loginService.validateCredentials(this.login).subscribe(response =>
    {
      if(response.messages[0] === 'OK')
      {
        let token = response.data[0];
        window.localStorage.setItem("token", token as string);
        window.localStorage.setItem("email", this.login.email);
        window.location.href= '/home';
      }
      else
      {
        if(this.login.email !== "" || this.login.password !== "")
        {
          this.alertWrongCredentials = true;
        }
      }
    });
  }
}
