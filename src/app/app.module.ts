import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AdminService } from './admin.service';

import { AppComponent } from './app.component';
import { CardapioComponent } from './cardapio/cardapio.component';
import { CarrinhoService } from './carrinho.service';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PageAdminComponent } from './page-admin/page-admin.component';
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
      {path: 'pageviewproduto', component: PageViewProdutoComponent},
      {path: 'pageadmin', component: PageAdminComponent}
    ]),
  ],

  providers: [
    CarrinhoService,
    AdminService
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
