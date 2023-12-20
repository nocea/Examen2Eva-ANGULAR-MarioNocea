import { Injectable } from '@angular/core';
import { Firestore, addDoc, collection, collectionData, deleteDoc, doc, docData, setDoc } from '@angular/fire/firestore';
import { Entrevista } from '../Modelos/entrevista';
import { Observable } from 'rxjs';
import { Candidato } from '../Modelos/candidato';
import { Puesto } from '../Modelos/puesto';

@Injectable({
  providedIn: 'root'
})
export class EntrevistaService {

  coleccion: string = '';
  constructor(private firestore :Firestore) { }
  //Metodo para guardar una entrevista
  addEntrevista(entrevista:Entrevista,candidato:Candidato,puesto:Puesto){
    const entrevistaRef=collection(this.firestore,'entrevistas');
    entrevista.candidato=candidato;
    entrevista.puesto=puesto;
    return addDoc(entrevistaRef,entrevista);
  }
  //metodo para obtener todas las entrevistas
  getEntrevistas():Observable<Entrevista[]>{
    const entrevistaRef=collection(this.firestore,'entrevistas');
    return collectionData(entrevistaRef,{idField:'id'})as Observable<Entrevista[]>;
  }
  //metodo para borrar entrevistas
  delEntrevista(entrevista: Entrevista) {
    const entrevistaRef = doc(this.firestore, `entrevistas/${entrevista.id}`);
    return deleteDoc(entrevistaRef);
  }
  //metodo para obtener entrevistas por id
  getEntrevista(id: string) {
    const elementDocRef = doc(this.firestore, `entrevistas/${id}`);
    return docData(elementDocRef, { idField: 'id' }) as Observable<any>;
  }
}
