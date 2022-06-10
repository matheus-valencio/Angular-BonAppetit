import { Injectable } from '@angular/core';

interface Carrinho {
  nome_produto: string;
}

@Injectable()
export class CarrinhoService {
  list: Array<Carrinho> = [];

  constructor() {}


}
