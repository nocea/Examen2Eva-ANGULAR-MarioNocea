import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, MaxValidator, Validators,} from '@angular/forms';
import { PuestoService } from 'src/app/Servicios/puesto.service';

@Component({
  selector: 'app-registro-puesto',
  templateUrl: './registro-puesto.component.html',
  styleUrls: ['./registro-puesto.component.css']
})
export class RegistroPuestoComponent implements OnInit {
  mensaje:string="Pulsa para registrar el puesto";
  creado:boolean=false;
  formulario: FormGroup;
  constructor(private puestoService:PuestoService){
    this.formulario=new FormGroup({
    nombrePuesto:new FormControl((''),Validators.required)
  });}
  ngOnInit(): void {
     }
   onSubmit() {
    console.log(this.formulario.value)
    this.puestoService.addPuesto(this.formulario.value);
    this.formulario.reset();
    this.creado=true;
    this.mensaje="Se ha registrado un puesto";
  }
}
