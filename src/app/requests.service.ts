import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Router } from '@angular/router';

interface Auth {
  token: string;
  username: string;
  profile: Array<string>;
}

@Injectable()
export class RequestsService {
  name = 'My spring boot app';
  site = 'http://localhost:8080';
  login = 'admin'; //admin
  password = 'admin'; //admin

  auth = null;
  header = null;

  list = null;
  listCat = null;
  constructor(private http: HttpClient, private route: Router) {}

  postLogin(psw, login) {
    this.http
      .post<Auth>(this.site + '/login', {
        login: login,
        senha: psw,
      })
      .subscribe((data) => {
        this.auth = data;
        this.header = {
          headers: new HttpHeaders().set(
            'Authorization',
            `Bearer ${this.auth.token}`
          ),
        };

        if (this.auth.profile[0] == ['ADMIN']) {
          this.route.navigate(['/pageadmin']);
        }
      });
  }
  postLogout() {
    this.auth = null;
  }

  getList() {
    this.http.get<any>(this.site + '/produtos', {}).subscribe((data) => {
      this.list = data;
    });
    return this.list;
  }

  deletarProduto(id) {
    this.http
      .delete<any>(this.site + '/produtos/' + id, this.header)
      .subscribe(() => {
        this.getList();
      });
  }

  postCategoria(categoria) {
    this.http
      .post<any>(this.site + '/categoria', { nome: categoria }, this.header)
      .subscribe((data) => {
        console.log(data);
      });
  }

  getCategoria() {
    this.http.get<any>(this.site + '/categoria', {}).subscribe((data) => {
      this.listCat = data;
      console.log(data);
    });
  }
  deletarCategoria(id) {
    this.http
      .delete<any>(this.site + '/categoria/' + id, this.header)
      .subscribe(() => {
        this.getCategoria();
      });
  }
  putCategoria(idc, nomec) {
    this.http
      .put(this.site + '/categoria', { id: idc, nome: nomec }, this.header)
      .subscribe((data) => {
        console.log(data);
      });
  }

  ngOnInit() {}
}
