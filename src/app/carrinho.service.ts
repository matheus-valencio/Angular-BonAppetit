import { Injectable } from '@angular/core';

interface Carrinho {
  nome_produto: string;
}

@Injectable()
export class CarrinhoService {

  list: Array<Carrinho> = [];

  constructor() { }

  getList(){
    return this.list;
  }

  add(nome_produto: string){
    this.list.push()
  }

  remove(index: number){
    this.list.slice(index, 1);
  }


}