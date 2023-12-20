import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, MaxValidator, Validators,} from '@angular/forms';
import { Candidato } from 'src/app/Modelos/candidato';
import { Puesto } from 'src/app/Modelos/puesto';
import { CandidatoService } from 'src/app/Servicios/candidato.service';
import { EntrevistaService } from 'src/app/Servicios/entrevista.service';
import { PuestoService } from 'src/app/Servicios/puesto.service';

@Component({
  selector: 'app-registro-entrevista',
  templateUrl: './registro-entrevista.component.html',
  styleUrls: ['./registro-entrevista.component.css']
})
export class RegistroEntrevistaComponent {
  //mensajes de confirmacion
  mensajeFecha:string="Introduzca una fecha y elija tanto candidato como puesto";
  mensajeCandidato:string="";
  mensajePuesto:string="";
  mensajeFinal:string="No ha guardado la entrevista todavía";
  creado:boolean=false;
  formulario: FormGroup;
  //listas de candidatos y puestos para mostrar
  candidatos:Candidato[]=[];
  puestos:Puesto[]=[];
  puesto!:Puesto;
  candidato!:Candidato;
  constructor(private entrevistaService:EntrevistaService,private candidatoService:CandidatoService,private puestoService:PuestoService){
    this.formulario=new FormGroup({
    fechaEntrevista:new FormControl((''),Validators.required),
  });}
  ngOnInit(): void {
    //guardo las listas
    this.candidatoService.getCandidatos().subscribe(candidato => {
      this.candidatos = candidato;
    })
    this.puestoService.getPuesto().subscribe(puesto => {
      this.puestos = puesto;
    })
     }
     //metodo para guardar el candidato elegido
    guardarCandidato(candidato:Candidato){
      this.candidato=candidato;
      console.log(this.candidato);
      this.mensajeCandidato="Ha elegido un candidato,ahora elija un puesto."
    }
    //metodo para guardar el puesto elegido
    guardarPuesto(puesto:Puesto){
      this.puesto=puesto;
      console.log(this.puesto);
      this.mensajePuesto="Ha elegido un puesto,guarde la entrevista."
    }
    guardarEntrevista(){
      //llamo al servicio de la entrevista y la añado a la base de datos
      this.entrevistaService.addEntrevista(this.formulario.value,this.candidato,this.puesto);
      this.creado=true;
      this.mensajeFinal="Ha guardado la entrevista."
    }
}
