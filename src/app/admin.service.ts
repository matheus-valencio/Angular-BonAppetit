import { Injectable } from '@angular/core';

interface Admin{
pk_produto: string;
nm_produto: string;
ds_produto: string;
nm_imagem: string;
vl_produto: string
categoria_pk_produto: string;

}
@Injectable()
export class AdminService {
lista: Array<Admin> = [];
  constructor() { }

  getLista(){
    return this.lista; 
  };

  addLista(
    pk_produto: string,
    nm_produto: string,
    ds_produto: string,
    nm_imagem: string,
    vl_produto: string,
    categoria_pk_produto: string
  )
  {
    this.lista.push({ pk_produto, nm_produto, ds_produto, nm_imagem, vl_produto, categoria_pk_produto });
  }

  deleteItem(index: number) {
    this.lista.splice(index, 1);
  }
}