import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PartidoModule } from './partido/partido.module';
import { EquipoModule } from './equipo/equipo.module';
import {  HttpClientModule } from '@angular/common/http';
import { GrupoModule } from './grupo/grupo.module';
import { HomeTeamModule } from './homeTeam/homeTeam.module';

@NgModule({
  declarations: [
    AppComponent,
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PartidoModule,
    EquipoModule,
    HttpClientModule,
    GrupoModule,
    HomeTeamModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
