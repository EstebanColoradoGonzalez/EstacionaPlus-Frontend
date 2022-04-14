import { City } from "./City";
import { Place } from "./Place";

export class Parking implements ResponseRequestParking
{

    code!: number;
    nit!: string;
    name!: string ;
    address!: string;
    city!: City;
    places!: Array<Place>;

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