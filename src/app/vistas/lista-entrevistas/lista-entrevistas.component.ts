import { Component, OnInit } from '@angular/core';
import { EntrevistaService } from 'src/app/Servicios/entrevista.service';
import { Entrevista } from 'src/app/Modelos/entrevista';

@Component({
  selector: 'app-lista-entrevistas',
  templateUrl: './lista-entrevistas.component.html',
  styleUrls: ['./lista-entrevistas.component.css']
})
export class ListaEntrevistasComponent implements OnInit {
  //listaEntrevistas
  entrevista:Entrevista[]=[];
  constructor(private entrevistaService:EntrevistaService){}
  ngOnInit(): void {
    //guardo las entrevistas en la lista
    this.entrevistaService.getEntrevistas().subscribe(entrevista => {
      this.entrevista = entrevista;
    })
  }
   delEntrevista(entrevista: Entrevista) {
    this.entrevistaService.delEntrevista(entrevista);
  }
}
