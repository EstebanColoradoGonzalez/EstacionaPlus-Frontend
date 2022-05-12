import { City } from "./City";
import { ParkingPlace } from "./ParkingPlace";

export class Parking implements ResponseRequestParking
{

  code: number = 0;
  nit: string = '';
  name: string = '';
  address: string = '';
  city: City = new City();
  places: Array<ParkingPlace> = new Array<ParkingPlace>();

  constructor()
  {

  }

  status!: string;
  message!: string;
  data!: Parking[];
}

export interface ResponseRequestParking
{
  status: string;
  message: string;
  data: Array<Parking>;
}
