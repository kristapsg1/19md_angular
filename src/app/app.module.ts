import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';
import { FormComponent } from './form/form.component';
import { CardsComponent } from './cards/cards.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { NavbarComponent } from './navbar/navbar.component';
import { AboutComponent } from './about/about.component';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { CardDetailsComponent } from './card-details/card-details.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    CardsComponent,
    NavbarComponent,
    AboutComponent,
    CardDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MatSnackBarModule,
    BrowserAnimationsModule,
    
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent],
})
export class AppModule {}
