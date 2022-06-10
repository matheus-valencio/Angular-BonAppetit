import { Component, OnInit } from '@angular/core';
import { TasksService } from '../tasks.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.component.html',
  styleUrls: ['./pedido.component.css']
})
export class PedidoComponent implements OnInit {item;
  constructor(public tasks: TasksService,
    private route: ActivatedRoute
    ) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      this.item = this.tasks.getList()[params.get('index')];
    })
  }
}