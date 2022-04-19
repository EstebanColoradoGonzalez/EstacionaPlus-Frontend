import { City } from "./City";
import { Place } from "./Place";

export class Parking implements ResponseRequestParking
{

  code: number = 0;
  nit: string = '';
  name: string = '';
  address: string = '';
  city: City = new City();
  places: Array<Place> = new Array<Place>();

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
