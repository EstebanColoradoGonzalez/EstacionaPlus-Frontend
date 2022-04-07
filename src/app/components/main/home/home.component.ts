import { Component } from '@angular/core';
import { Parking } from 'src/app/models/Parking';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent  
{
  parkings = new Array<Parking>();
  
  constructor() 
  { 

  }
}
