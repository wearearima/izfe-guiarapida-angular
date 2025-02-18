import { Cuenta } from "./cuenta";

export interface Perfil { 
    cuenta?: Cuenta;
    idPerfil?: number;
    idioma?: Perfil.IdiomaEnum;
}
export namespace Perfil {
    export type IdiomaEnum = 'CASTELLANO' | 'EUSKERA' | 'INGLES' | 'ALEMAN' | 'FRANCES';
    export const IdiomaEnum = {
        Castellano: 'CASTELLANO' as IdiomaEnum,
        Euskera: 'EUSKERA' as IdiomaEnum,
        Ingles: 'INGLES' as IdiomaEnum,
        Aleman: 'ALEMAN' as IdiomaEnum,
        Frances: 'FRANCES' as IdiomaEnum
    };
}