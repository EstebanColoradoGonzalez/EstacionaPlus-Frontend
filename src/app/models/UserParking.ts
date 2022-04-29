import { Parking } from "./Parking";
import { User } from "./User";

export class UserParking implements ResponseRequestUserParking
{
  code: number = 0;
  user: User = new User();
  parking: Parking = new Parking();

  constructor()
  {

  }

  status!: string;
  messages!: string[];
  data!: UserParking[];
}

export interface ResponseRequestUserParking
{
  status: string;
  messages: string[];
  data: Array<UserParking>;
}
