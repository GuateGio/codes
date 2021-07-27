import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ROUTING } from "./app.routes";
import { HomeComponent } from './module-gestion/components/home/home.component';
import { GestionComponent } from './module-gestion/components/gestion/gestion.component';
import { MenuComponent } from './module-gestion/components/menu/menu.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GestionComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    ROUTING
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
