import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { ConferenciaComponent } from './components/conferencia/conferencia.component';
import { CalendarioComponent } from './components/calendario/calendario.component';
import { InvitadosComponent } from './components/invitados/invitados.component';
import { ReservacionesComponent } from './components/reservaciones/reservaciones.component';
import { ErrorComponent } from './components/error/error.component';

const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'home', component: HomeComponent},
    {path: 'conferencia', component: ConferenciaComponent},
    {path: 'calendario', component: CalendarioComponent},
    {path: 'invitados', component: InvitadosComponent},
    {path: 'reservaciones',component: ReservacionesComponent},
    {path: '**', component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
