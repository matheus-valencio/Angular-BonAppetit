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
  list: Array<Task> = [
    {
    pk_id: '1',
    nm_produto: 'Mussarela',
    ds_produto: 'Pizza Mussarela',
    nm_imagem: 'Pizza Mussarela',
    vl_produto: '40',
    categoria_pk_id: '2',
    },
    {
      pk_id: '2',
      nm_produto: 'Mussarela',
      ds_produto: 'Pizza Mussarela',
      nm_imagem: 'Pizza Mussarela',
      vl_produto: '40',
      categoria_pk_id: '2',
      },
      {
        pk_id: '3',
        nm_produto: 'Mussarela',
        ds_produto: 'Pizza Mussarela',
        nm_imagem: 'Pizza Mussarela',
        vl_produto: '40',
        categoria_pk_id: '2',
        },
        {
          pk_id: '4',
          nm_produto: 'Mussarela',
          ds_produto: 'Pizza Mussarela',
          nm_imagem: 'Pizza Mussarela',
          vl_produto: '40',
          categoria_pk_id: '2',
          },
          {
            pk_id: '5',
            nm_produto: 'Mussarela',
            ds_produto: 'Pizza Mussarela',
            nm_imagem: 'Pizza Mussarela',
            vl_produto: '40',
            categoria_pk_id: '2',
            },
            {
              pk_id: '6',
              nm_produto: 'Mussarela',
              ds_produto: 'Pizza Mussarela',
              nm_imagem: 'Pizza Mussarela',
              vl_produto: '40',
              categoria_pk_id: '2',
              },
             

  ];

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