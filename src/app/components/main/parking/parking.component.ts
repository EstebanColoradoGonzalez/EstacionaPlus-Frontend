import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Parking, ResponseRequestParking } from 'src/app/models/Parking';
import { ParkingPlace } from 'src/app/models/ParkingPlace';
import { User } from 'src/app/models/User';
import { ReservationService } from 'src/app/services/models/reservation.service';
import { UserService } from 'src/app/services/models/user.service';

import { ParkingService } from '../../../services/models/parking.service';
import { PaymentMethod } from './../../../models/PaymentMethod';
import { Reservation } from './../../../models/Reservation';

@Component({
  selector: 'app-parking',
  templateUrl: './parking.component.html',
  styleUrls: ['./parking.component.scss']
})
export class ParkingComponent implements OnInit
{
  parking: Parking = new Parking();
  parkings: Array<Parking> = [];
  places: Array<ParkingPlace> = [];
  paymentMethods: Array<PaymentMethod> = [];
  user: User = new User();
  reservation: Reservation = new Reservation();
  isLoged: boolean = false;
  alertDateInput: boolean = false;
  alertArrivalTimeInput: boolean = false;
  reservationTimeInput: boolean = false;
  placeSelected: boolean = false;
  alertPlaceInput: boolean = false;
  paymentMethodSelected: boolean = false;
  alertPaymentMethodInput: boolean = false;
  alertSignUpSuccessful: boolean = false;
  alertSignUpFailed: boolean = false;

  formReservation = new FormGroup
  ({
    date: new FormControl('', Validators.required),
    arrivalTime: new FormControl('', Validators.required),
    reservationTime: new FormControl('', Validators.required),
    placeInput: new FormControl('', Validators.required),
    paymentMethodInput: new FormControl('', Validators.required),
  });

  constructor(private route: ActivatedRoute, private parkingService: ParkingService, private userService: UserService, private reservationService: ReservationService)
  {

  }

  ngOnInit(): void
  {
    this.parkingService.getAll().subscribe((response: ResponseRequestParking) =>
    {
      this.parkings = response.data;

      const routeParams = this.route.snapshot.paramMap;
      const parkingCodeFromRoute = Number(routeParams.get('parkingCode'));

      this.parking = this.parkings.find((parking) => parking.code === parkingCodeFromRoute)!;
      this.parking.places.sort(function(a, b)
      {
        if(a.place.code > b.place.code)
        {
          return 1;
        }

        if(a.place.code < b.place.code)
        {
          return -1;
        }

        return 0;
      });
    });

    let email = sessionStorage.getItem("email");

    this.userService.getByEmailWithPassword(email as string).subscribe(response =>
    {
      this.user = response.data[0];
      console.log(this.parkings);

      for(let place of this.parking.places)
      {
        if(!place.taken && place.place.typePlace.name === this.user.vehicle.typeVehicle.name)
        {
          this.places.push(place);
        }
      }

      this.places.sort(function(a, b)
      {
        if(a.code > b.code)
        {
          return 1;
        }

        if(a.code < b.code)
        {
          return -1;
        }

          return 0;
      });
    });

    let payment1 = new PaymentMethod();
    let payment2 = new PaymentMethod();

    payment1.code = 1;
    payment1.name = "Efectivo";

    payment2.code = 2;
    payment2.name = "Tarjeta";

    this.paymentMethods.push(payment1);
    this.paymentMethods.push(payment2);

    this.reservationService.getAll().subscribe(response =>
    {
      if(response.data.length === 0)
      {
        this.reservation.code = 1;
      }
      else
      {
        let lastIndex = response.data[response.data.length - 1].code + 1;

        this.reservation.code = lastIndex;
      }
    });

    if(sessionStorage.getItem("token") !== "")
    {
      this.isLoged = true
    }
  }

  onReserve(): void
  {
    this.alertDateInput = false;
    this.alertArrivalTimeInput = false;
    this.reservationTimeInput = false;
    this.alertPlaceInput = false;
    this.paymentMethodSelected = false;
    this.alertPaymentMethodInput = false;

    this.reservation.date = this.formReservation.get('date')?.value;
    this.reservation.arrivalTime = this.formReservation.get('arrivalTime')?.value;
    this.reservation.reservedTime.value = this.formReservation.get('reservationTime')?.value;
    this.reservation.reservedTime.typeTime = "Hora";

    this.reservation.place.place.position = this.formReservation.get('placeInput')?.value;
    for(let place of this.places)
    {
      if(place.place.position === this.reservation.place.place.position)
      {
        this.reservation.place.code = place.code;
        this.reservation.place.place.code = place.place.code;
      }
    }

    this.reservation.place.place.typePlace.code = this.user.vehicle.typeVehicle.code;
    this.reservation.place.place.typePlace.name = this.user.vehicle.typeVehicle.name;

    this.reservation.paymentMethod.name = this.formReservation.get('paymentMethodInput')?.value;

    for(let paymentMethod of this.paymentMethods)
    {
      if(paymentMethod.name === this.reservation.paymentMethod.name)
      {
        this.reservation.paymentMethod.code = paymentMethod.code;
      }
    }

    this.reservation.user = this.user;

    if(this.reservation.date === "")
    {
      this.alertDateInput = true;
    }

    if(this.reservation.arrivalTime  === "")
    {
      this.alertArrivalTimeInput = true;
    }

    if(String(this.reservation.reservedTime.value) === "")
    {
      this.reservationTimeInput = true;
    }

    if(this.reservation.place.place.position === "")
    {
      this.alertPlaceInput = true;
    }

    if(this.reservation.paymentMethod.name === "")
    {
      this.alertPaymentMethodInput = true;
    }

    this.reservationService.save(this.reservation).subscribe(response =>
    {
      if(response.status === 'SUCCESSFUL')
        {
          this.alertSignUpSuccessful = true;
        }
        else
        {
          this.alertSignUpFailed = true;
        }

    });
  }
}
