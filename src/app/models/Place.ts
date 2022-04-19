import { TypePlace } from "./TypePlace";

export class Place
{
    code: number = 0;
    position: string = '';
    isTaken: boolean = false;
    typePlace: TypePlace = new TypePlace();

    constructor()
    {

    }
}
