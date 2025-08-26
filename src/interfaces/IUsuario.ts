import type { Material } from "../models/Material.ts";

export interface IUsuario {
    id: number;
    nombre: string;
    prestar(material: Material): void;
}