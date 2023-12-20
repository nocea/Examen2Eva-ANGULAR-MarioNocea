import { Candidato } from "./candidato";
import { Puesto } from "./puesto";
export interface Entrevista {
    id: string;
    fechaEntrevista:string;
    candidato:Candidato;
    puesto:Puesto;
}