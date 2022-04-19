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
  userRole: UserRole = new UserRole();
  vehicle: Vehicle = new Vehicle();

  constructor()
  {

  }

  status!: string;
  message!: string;
  data!: User[];
  
}

export interface ResponseRequestUser
{
  status: string;
  message: string;
  data: Array<User>;
}
