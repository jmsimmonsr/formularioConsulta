import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GuateComprasModule } from "./guate-compras/guate-compras.module";
import { HttpClientModule } from "@angular/common/http";



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    GuateComprasModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
