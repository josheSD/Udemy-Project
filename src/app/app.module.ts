import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ConferenciaComponent } from './components/conferencia/conferencia.component';
import { CalendarioComponent } from './components/calendario/calendario.component';
import { InvitadosComponent } from './components/invitados/invitados.component';
import { ReservacionesComponent } from './components/reservaciones/reservaciones.component';
import { ErrorComponent } from './components/error/error.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ConferenciaComponent,
    CalendarioComponent,
    InvitadosComponent,
    ReservacionesComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
