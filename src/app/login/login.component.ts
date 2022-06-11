import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';

interface Auth {
  token: string;
  username: string;
  profile: Array<string>;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  name = 'My spring boot app';
  site = 'http://localhost:8080';
  login = 'admin'; //admin
  password = 'admin'; //admin

  auth = null;
  header = null;

  constructor(private http: HttpClient) {}

  postLogin() {
    this.http
      .post<Auth>(this.site + '/login', {
        login: this.login,
        senha: this.password,
      })
      .subscribe((data) => {
        this.auth = data;
        this.header = {
          headers: new HttpHeaders().set(
            'Authorization',
            `Bearer ${this.auth.token}`
          ),
        };

        console.log(this.header);
      });
  }

  ngOnInit() {}
}
