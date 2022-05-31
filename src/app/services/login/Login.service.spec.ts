import { HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
import { of } from 'rxjs/internal/observable/of';
import { Login } from 'src/app/models/Login';
import { LoginService } from 'src/app/services/login/Login.service';

describe('Login Service Tests', () =>
{
  let service: LoginService;
  let httpClientSpy: {post: jasmine.Spy};

  beforeEach(() =>
  {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['post']);
    service = new LoginService(httpClientSpy as any);
  });

  it('It must to create successful', () =>
  {
    expect(service).toBeTruthy();
  });

  it('It must to log in successful', (done: DoneFn) =>
  {
    let login = new Login();

    login.email = "estebancoloradogonzalez@gmail.com"
    login.password = "123456789Aa";

    const mockResultLogin =
    {
      "status": "SUCCESSFUL",
      "messages":
      [
        "OK"
      ],
      "data":
      [
        "eyJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJFc3RhY2lvbmFQbHVzIiwic3ViIjoiZXN0ZWJhbmNvbG9yYWRvZ29uemFsZXpAZ21haWwuY29tIiwicm9sZXMiOlsiUk9MRV9VU0VSIiwiUk9MRV9BRE1JTiJdLCJpYXQiOjE2NTM5NDk2MjYsImV4cCI6MTY1Mzk1MzIyNiwianRpIjoiOTJlMjBmNzAtMmYyZi00N2M5LWJhMTYtNGY4NGVmZjQ2NjgxIn0.sgUsr9CeO2DHZj0TklWV69tlYg-zp5fY9wvwRiRzSJk"
      ]
    }

    httpClientSpy.post.and.returnValue(of(mockResultLogin));

    service.validateCredentials(login).subscribe(response =>
    {
      expect(response.status).toEqual(mockResultLogin.status);
      expect(response.messages).toEqual(mockResultLogin.messages);
      done();
    });
  });

  it('It must to return a 500 internal server error', (done: DoneFn) =>
  {
    let login = new Login();

    login.email = "estebangonzalez@gmail.com"
    login.password = "123456789Aa";

    const mockResultLogin = new HttpErrorResponse({
      error: "User or password is wrong",
      status: 500
    });

    httpClientSpy.post.and.returnValue(throwError(mockResultLogin));

    service.validateCredentials(login).subscribe(response =>{}, error =>
    {
      expect(error.status).toEqual(500);
      done();
    });
  });
});
