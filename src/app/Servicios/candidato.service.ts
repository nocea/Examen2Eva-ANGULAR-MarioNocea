import { Injectable } from '@angular/core';
import { Firestore, addDoc, collection, collectionData, deleteDoc, doc, docData, setDoc } from '@angular/fire/firestore';
import { Candidato } from '../Modelos/candidato';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CandidatoService {
  coleccion: string = '';
  constructor(private firestore :Firestore) { }
  //metodo para añadir candidato
  addCandidato(candidato:Candidato){
    const candidatoRef=collection(this.firestore,'candidatos');
    return addDoc(candidatoRef,candidato);
  }
  //metodo para obtener todos los candidatos
  getCandidatos():Observable<Candidato[]>{
    const candidatoRef=collection(this.firestore,'candidatos');
    return collectionData(candidatoRef,{idField:'id'})as Observable<Candidato[]>;
  }
  //metodo para borrar todos los candidatos
  delCandidato(candidato: Candidato) {
    const candidatoRef = doc(this.firestore, `candidatos/${candidato.id}`);
    return deleteDoc(candidatoRef);
  }
  //metodo para obtener un candidato segun su id
  getCandidato(id: string) {
    const elementDocRef = doc(this.firestore, `candidatos/${id}`);
    return docData(elementDocRef, { idField: 'id' }) as Observable<any>;
  }
}
