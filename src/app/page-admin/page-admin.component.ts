import { Component, OnInit } from '@angular/core';
import { TasksService } from '../tasks.service';


@Component({
  selector: 'app-page-admin',
  templateUrl: './page-admin.component.html',
  styleUrls: ['./page-admin.component.css']
})
export class PageAdminComponent implements OnInit {

  constructor(public tasks: TasksService) { }

  ngOnInit() {
  }

}