import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ResponseRequestParking } from 'src/app/models/Parking';
import { User } from 'src/app/models/User';
import { UserService } from 'src/app/services/models/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit
{
  isAdmin: boolean = false;
  user: User = new User();

  constructor(private route: ActivatedRoute, private userService: UserService)
  {

  }

  ngOnInit(): void
  {
    this.getUser();
  }

  getUser(): void
  {
    const routeParams = this.route.snapshot.paramMap;
    const parkingCodeFromRoute = Number(routeParams.get('userCode'))

    this.userService.getByCode(parkingCodeFromRoute).subscribe(response =>
    {
      this.user = response.data[0];
      console.log(response);
    })
  }

}
