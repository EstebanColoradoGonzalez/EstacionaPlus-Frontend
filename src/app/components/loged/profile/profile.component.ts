import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit
{
  isAdmin: boolean = false;

  constructor()
  {
    
  }

  ngOnInit(): void
  {
    throw new Error('Method not implemented.');

  }
}
