import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, MaxValidator, Validators,} from '@angular/forms';
import { CandidatoService } from 'src/app/Servicios/candidato.service';
@Component({
  selector: 'app-registro-candidato',
  templateUrl: './registro-candidato.component.html',
  styleUrls: ['./registro-candidato.component.css']
})
export class RegistroCandidatoComponent  implements OnInit{
  //mensaje de confirmacion
  mensaje:string="Pulsa para registrar el candidato";
  creado:boolean=false;
  //guardo los datos del formulario de mi vista
  formulario: FormGroup;
  constructor(private candidatoService:CandidatoService){
    this.formulario=new FormGroup({
    nombre:new FormControl((''),Validators.required),
    apellidos:new FormControl((''),Validators.required),
    dni:new FormControl((''),Validators.required),
    direccion:new FormControl((''),Validators.required),
    fechaNacimiento:new FormControl((''),Validators.required),
    telefono:new FormControl((''),Validators.required),
    email:new FormControl('',[Validators.required,Validators.email])
  });}
  ngOnInit(): void {
     }
   onSubmit() {
    console.log(this.formulario.value)
    //llamo al metodo para guardar
    this.candidatoService.addCandidato(this.formulario.value);
    //reseteo el formulario para que se vuelva a poner vacío
    this.formulario.reset();
    this.creado=true;
    //cambio el mensaje de confirmacion
    this.mensaje="Se ha registrado un candidato";
  }
} 

