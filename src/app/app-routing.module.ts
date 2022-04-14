import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { ParkingComponent } from './components/parking/parking.component';

const routes: Routes = [{
  path: 'home',
  component: HomeComponent
  },
  {
    path: 'header',
    component: HeaderComponent
  },
  {
    path: 'parking/:parkingCode',
    component: ParkingComponent
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
