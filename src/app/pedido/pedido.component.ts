import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.component.html',
  styleUrls: ['./pedido.component.css']
})
export class PedidoComponent implements OnInit {
  id: number;
  nome_sabor: string;
  descricao: string

  constructor() {
    this.id = 1;
    this.nome_sabor = 'mussarela';
    this.descricao = 'Pizza com queijo mussarela'
   }
  
  ngOnInit() {
  }

}