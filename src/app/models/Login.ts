export class Login implements ResponseRequestLogin
{
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
