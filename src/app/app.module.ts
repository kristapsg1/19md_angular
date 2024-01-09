import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';
import { FormComponent } from './form/form.component';
import { CardsComponent } from './cards/cards.component';

import { NavbarComponent } from './navbar/navbar.component';
import { AboutComponent } from './about/about.component';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    CardsComponent,
    NavbarComponent,
    AboutComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [HttpClient],
  bootstrap: [AppComponent],
})
export class AppModule {}
