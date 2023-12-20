import { Injectable } from '@angular/core';
import { Firestore, addDoc, collection, collectionData, deleteDoc, doc, docData, setDoc } from '@angular/fire/firestore';
import { Puesto } from '../Modelos/puesto';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PuestoService {

  coleccion: string = '';
  constructor(private firestore :Firestore) { }
  //Metodo para añadir un puesto
  addPuesto(puesto:Puesto){
    const puestoRef=collection(this.firestore,'puestos');
    return addDoc(puestoRef,puesto);
  }
  //metodo para obtener todos los puestos
  getPuesto():Observable<Puesto[]>{
    const puestoRef=collection(this.firestore,'puestos');
    return collectionData(puestoRef,{idField:'id'})as Observable<Puesto[]>;
  }
  //metodo para obtener puestos por id
  getPuestos(id: string) {
    const elementDocRef = doc(this.firestore, `puestos/${id}`);
    return docData(elementDocRef, { idField: 'id' }) as Observable<any>;
  }
}
