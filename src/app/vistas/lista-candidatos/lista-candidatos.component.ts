import { Component, OnInit } from '@angular/core';
import { CandidatoService } from 'src/app/Servicios/candidato.service';
import { Candidato } from 'src/app/Modelos/candidato';
@Component({
  selector: 'app-lista-candidatos',
  templateUrl: './lista-candidatos.component.html',
  styleUrls: ['./lista-candidatos.component.css']
})
export class ListaCandidatosComponent implements OnInit {
  //Lista de canditdatos
  candidatos:Candidato[]=[];
  constructor(private candidatoService:CandidatoService){}
  ngOnInit(): void {
    //guardo los candidatos en la lista
    this.candidatoService.getCandidatos().subscribe(candidato => {
      this.candidatos = candidato;
    })
  }
   delCandidato(candidato: Candidato) {
    this.candidatoService.delCandidato(candidato);
  }
}
