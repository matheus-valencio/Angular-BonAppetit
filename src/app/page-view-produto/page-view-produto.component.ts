import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-page-view-produto',
  templateUrl: './page-view-produto.component.html',
  styleUrls: ['./page-view-produto.component.css'],
})
export class PageViewProdutoComponent implements OnInit {
  item;
  constructor(public tasks: TasksService,
    private route: ActivatedRoute
    ) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      this.item = this.tasks.getList()[params.get('index')];
    })
  }
}
