export class Login implements ResponseRequestLogin
{
  [x: string]: any;
  email: string = '';
  password: string = '';

  constructor()
  {

  }

  status!: string;
  messages!: string[];
  data!: String[];
}

export interface ResponseRequestLogin
{
  status: string;
  messages: string[];
  data: Array<String>;
}
