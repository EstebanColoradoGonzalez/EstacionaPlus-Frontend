import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyparkingComponent } from './components/loged/myparking/myparking.component';
import { ProfileComponent } from './components/loged/profile/profile.component';
import { SettingsComponent } from './components/loged/settings/settings.component';
import { AboutusComponent } from './components/main/aboutus/aboutus.component';
import { HomeComponent } from './components/main/home/home.component';
import { ParkingComponent } from './components/main/parking/parking.component';

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
    component: SettingsComponent
  },
  {
    path: 'myparking/:parkingCode',
    component: MyparkingComponent
  },
  {
    path: 'profile/:userCode',
    component: ProfileComponent
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
