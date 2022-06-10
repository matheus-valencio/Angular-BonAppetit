import { Component, OnInit } from '@angular/core';
import { CarrinhoService } from '../carrinho.service';

@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.component.html',
  styleUrls: ['./pedido.component.css']
})
export class PedidoComponent implements OnInit {
  id: number;
  nome_sabor: string;
  descricao: string

  constructor(public carrinho: CarrinhoService) {}
  
  ngOnInit() {
  }

}