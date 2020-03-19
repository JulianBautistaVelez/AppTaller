import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VerDineroComponent } from './components/dinero/ver-dinero/ver-dinero.component';
import { PagInicialComponent } from './components/pag-inicial/pag-inicial.component';

@NgModule({
  declarations: [
    AppComponent,
    VerDineroComponent,
    PagInicialComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
