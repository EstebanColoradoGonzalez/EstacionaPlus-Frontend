import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyparkingComponent } from './components/loged/myparking/myparking.component';
import { ProfileComponent } from './components/loged/profile/profile.component';
import { SettingsComponent } from './components/loged/settings/settings.component';
import { AboutusComponent } from './components/main/aboutus/aboutus.component';
import { HomeComponent } from './components/main/home/home.component';
import { ParkingComponent } from './components/main/parking/parking.component';
import { MyreservationsComponent } from './components/loged/myreservations/myreservations.component';
import { AuthorizationGuard } from './routeguards/authorization.guard';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'parking/:parkingCode',
    component: ParkingComponent
  },
  {
    path: 'aboutus',
    component: AboutusComponent
  },
  {
    path: 'settings/:userCode',
    component: SettingsComponent, canActivate: [AuthorizationGuard]
  },
  {
    path: 'myparking/:parkingCode',
    component: MyparkingComponent, canActivate: [AuthorizationGuard]
  },
  {
    path: 'profile/:userCode',
    component: ProfileComponent, canActivate: [AuthorizationGuard]
  },
  {
    path: 'myreservations/:userCode',
    component: MyreservationsComponent, canActivate: [AuthorizationGuard]
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
