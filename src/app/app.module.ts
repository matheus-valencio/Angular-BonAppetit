import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

import { CarrinhoService } from './carrinho.service';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PageAdminComponent } from './page-admin/page-admin.component';
import { PageViewProdutoComponent } from './page-view-produto/page-view-produto.component';
import { PedidoComponent } from './pedido/pedido.component';
import { TasksService } from './tasks.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,

    PedidoComponent,
    PageViewProdutoComponent,
    PageAdminComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'login', component: LoginComponent },

      { path: 'pedidos', component: PedidoComponent },
      { path: 'pageviewproduto', component: PageViewProdutoComponent },
      { path: 'pageadmin', component: PageAdminComponent },
    ]),
  ],

  providers: [CarrinhoService, TasksService],
  bootstrap: [AppComponent],
})
export class AppModule {}
