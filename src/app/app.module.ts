import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/main/header/header.component';
import { HomeComponent } from './components/main/home/home.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ParkingComponent } from './components/main/parking/parking.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AboutusComponent } from './components/main/aboutus/aboutus.component';
import { HeaderLogedComponent } from './components/loged/header-loged/header-loged.component';
import { SettingsComponent } from './components/loged/settings/settings.component';
import { ProfileComponent } from './components/loged/profile/profile.component';
import { MyparkingComponent } from './components/loged/myparking/myparking.component';
import { MyreservationsComponent } from './components/loged/myreservations/myreservations.component';
import { JwtInterceptor } from './interceptors/jwt.interceptor';
import { AuthorizationGuard } from './routeguards/authorization.guard';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ParkingComponent,
    AboutusComponent,
    HeaderLogedComponent,
    SettingsComponent,
    ProfileComponent,
    MyparkingComponent,
    MyreservationsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers:
  [{
    provide: HTTP_INTERCEPTORS,
    useClass: JwtInterceptor,
    multi: true
  },
    AuthorizationGuard,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
