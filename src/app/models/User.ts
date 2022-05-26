import { Vehicle } from './Vehicle';
import { UserRole } from './UserRole';

export class User implements ResponseRequestUser
{
  code: number = 0;
  names: string = '';
  lastNames: string = '';
  identificationNumber: string = '';
  phone: string = '';
  email: string = '';
  password: string = '';
  roles: Array<UserRole> = new Array<UserRole>();
  vehicle: Vehicle = new Vehicle();

  constructor()
  {

  }

  status!: string;
  messages!: string[];
  data!: User[];

}

export interface ResponseRequestUser
{
  status: string;
  messages: string[];
  data: Array<User>;
}
