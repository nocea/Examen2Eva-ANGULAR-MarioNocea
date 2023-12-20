import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistroCandidatoComponent } from './vistas/registro-candidato/registro-candidato.component';
import { InicioComponent } from './vistas/inicio/inicio.component';
import { RegistroEntrevistaComponent } from './vistas/registro-entrevista/registro-entrevista.component';
import { ListaCandidatosComponent } from './vistas/lista-candidatos/lista-candidatos.component';
import { ListaEntrevistasComponent } from './vistas/lista-entrevistas/lista-entrevistas.component';
import { RegistroPuestoComponent } from './vistas/registro-puesto/registro-puesto.component';
const routes: Routes = [
  { path: 'registroCandidato', component: RegistroCandidatoComponent },
  { path: 'registroEntrevista', component: RegistroEntrevistaComponent },
  { path: 'listaCandidatos', component: ListaCandidatosComponent },
  { path: 'listaEntrevistas', component: ListaEntrevistasComponent },
  { path: 'registroPuesto', component: RegistroPuestoComponent },
  { path: 'inicio', component: InicioComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
