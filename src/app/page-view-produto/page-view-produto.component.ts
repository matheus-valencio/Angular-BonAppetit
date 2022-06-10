import { Component, OnInit } from '@angular/core';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-page-view-produto',
  templateUrl: './page-view-produto.component.html',
  styleUrls: ['./page-view-produto.component.css'],
})
export class PageViewProdutoComponent implements OnInit {
  constructor(public tasks: TasksService) {}

  ngOnInit() {}
}
