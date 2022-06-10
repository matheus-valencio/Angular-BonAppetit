import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { CardapioComponent } from './cardapio/cardapio.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PageViewProdutoComponent } from './page-view-produto/page-view-produto.component';
import { PedidoComponent } from './pedido/pedido.component';


@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'login', component: LoginComponent },
      { path: 'cardapio', component: CardapioComponent },
      { path: 'pedidos', component: PedidoComponent },
      {path: 'pageviewproduto', component: PageViewProdutoComponent}
    ]),
  ],

  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
