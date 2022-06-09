import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { CardapioComponent } from './cardapio/cardapio.component';
import { HomeComponent } from './home/home.component';
import { SobreComponent } from './sobre/sobre.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'cardapio', component: CardapioComponent },
      { path: 'sobre', component: SobreComponent },
    ]),
  ],

  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
