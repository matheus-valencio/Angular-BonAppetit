import { Injectable } from '@angular/core';

interface Task{
  
  pk_id: string;
  ds_produto: string;
  nm_produto: string;
  nm_imagem: string;
  vl_produto: string;
  categoria_pk_id: string;


}


@Injectable()
export class TasksService {
  list: Array<Task> = [];

  constructor() { }
  
  getList(){
    return this.list
  }

  add(
    pk_id: string,
    ds_produto: string,
    nm_produto: string,
    nm_imagem: string,
    vl_produto: string,
    categoria_pk_id: string,
    ){
    this.list.push({ pk_id, ds_produto, nm_produto, nm_imagem, vl_produto, categoria_pk_id});
  }

  remove(index: number){
    this.list.slice(index, 1);
  }

}