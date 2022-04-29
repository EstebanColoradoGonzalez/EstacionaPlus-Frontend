import { FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit
{
  alertNameModifyInput: boolean = false;
  alertLastNamesModifyInput: boolean = false;
  alertIdentificationNumberModifyInput: boolean = false;
  alertPhoneModifyInput: boolean = false;
  alertEmailModifyInput: boolean = false;
  alertTypeVehicleModifyInput: boolean = false;
  alertLicenseModifyInput: boolean = false;
  alertPasswordModifyInput: boolean = false;
  alertConfirmPasswordModifyInput: boolean = false;
  alertModifyFailed: boolean = false;
  message: String = "";

  formModify = new FormGroup({});

  constructor()
  {

  }

  ngOnInit(): void
  {
    throw new Error('Method not implemented.');
  }

  onClickModify(): void
  {

  }
}
