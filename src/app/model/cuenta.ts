import { Perfil } from "./perfil";

export interface Cuenta { 
    apellido?: string;
    email?: string;
    fcreacion?: string;
    id?: string;
    idUsuario?: string;
    nombre?: string;
    password?: string;
    perfil?: Perfil;
    telefono?: number;
}