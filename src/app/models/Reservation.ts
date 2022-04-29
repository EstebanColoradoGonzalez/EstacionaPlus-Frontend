import { PaymentMethod } from "./PaymentMethod";
import { Place } from "./Place";
import { Price } from "./Price";
import { ReservedTime } from "./ReservedTime";
import { User } from "./User";

export class Reservation implements ResponseRequestReservation
{
  code: number = 0;
  date: string = '';
  arrivalTime: string = '';
  departureTime: string = '';
  reservedTime: ReservedTime = new ReservedTime();
  price: Price = new Price();
  place: Place = new Place();
  paymentMethod: PaymentMethod = new PaymentMethod();
  user: User = new User();

  constructor()
  {

  }

  status!: string;
  messages!: string[];
  data!: Reservation[];
}

export interface ResponseRequestReservation
{
  status: string;
  messages: string[];
  data: Array<Reservation>;
}

