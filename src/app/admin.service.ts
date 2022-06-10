import { Injectable } from '@angular/core';

interface Admin{
pk_produto: number;
nm_produto: string;
ds_produto: string;
nm_imagem: string;
vl_produto: number;
categoria_pk_produto: string;

}
@Injectable()
export class AdminService {

  constructor() { }

}