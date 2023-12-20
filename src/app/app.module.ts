import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistroCandidatoComponent } from './vistas/registro-candidato/registro-candidato.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { InicioComponent } from './vistas/inicio/inicio.component';
import { environment } from './environments/environment';
import { RegistroEntrevistaComponent } from './vistas/registro-entrevista/registro-entrevista.component';
import { ListaCandidatosComponent } from './vistas/lista-candidatos/lista-candidatos.component';
import { ListaEntrevistasComponent } from './vistas/lista-entrevistas/lista-entrevistas.component';
import { RegistroPuestoComponent } from './vistas/registro-puesto/registro-puesto.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistroCandidatoComponent,
    InicioComponent,
    RegistroEntrevistaComponent,
    ListaCandidatosComponent,
    ListaEntrevistasComponent,
    RegistroPuestoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    ReactiveFormsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore())
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
