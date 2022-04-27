import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot,Router } from '@angular/router';
import { Login } from '../models/Login';

@Injectable()
export class AuthActivateRouteGuard implements CanActivate
{
  user = new Login();

  constructor(private router: Router)
  {

  }

  canActivate(route:ActivatedRouteSnapshot, state:RouterStateSnapshot)
  {
    var d= localStorage.getItem('userdetails') as string;
    this.user = JSON.parse(d);

    if(!this.user)
    {
      this.router.navigate(['login']);
    }

    return this.user?true:false;
  }
}
