import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ConferenciaComponent } from './components/conferencia/conferencia.component';
import { CalendarioComponent } from './components/calendario/calendario.component';
import { InvitadosComponent } from './components/invitados/invitados.component';
import { ReservacionesComponent } from './components/reservaciones/reservaciones.component';
import { ErrorComponent } from './components/error/error.component';
import { ParteHeaderComponent } from './components/parte-header/parte-header.component';
import { ParteNavComponent } from './components/parte-nav/parte-nav.component';
import { ParteFooterComponent } from './components/parte-footer/parte-footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ConferenciaComponent,
    CalendarioComponent,
    InvitadosComponent,
    ReservacionesComponent,
    ErrorComponent,
    ParteHeaderComponent,
    ParteNavComponent,
    ParteFooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
