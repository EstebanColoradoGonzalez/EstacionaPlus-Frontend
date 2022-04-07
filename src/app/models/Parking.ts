import { City } from "./City";
import { Place } from "./Place";

export class Parking
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
}