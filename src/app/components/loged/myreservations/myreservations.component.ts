import { ReservationService } from 'src/app/services/models/reservation.service';
import { Reservation } from 'src/app/models/Reservation';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-myreservations',
  templateUrl: './myreservations.component.html',
  styleUrls: ['./myreservations.component.scss']
})
export class MyreservationsComponent implements OnInit
{
  reservation: Reservation = new Reservation();
  reservations: Array<Reservation> = [];

  constructor(private reservationService: ReservationService, private route: ActivatedRoute)
  {

  }

  ngOnInit(): void
  {
    this.reservationService.getAll().subscribe(response =>
    {
      this.reservations = response.data;
      //console.log(this.reservations);

      const routeParams = this.route.snapshot.paramMap;
      const reservationCodeFromRoute = Number(routeParams.get('reservationCode'));
      this.reservation = this.reservations.find((reservation) => reservation.code === reservationCodeFromRoute)!;

      console.log(this.reservation);
    });
  }
}
