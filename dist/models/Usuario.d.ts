import type { Material } from "./Material.ts";
import type { IUsuario } from "../interfaces/IUsuario.ts";
export declare class Usuario implements IUsuario {
    id: number;
    nombre: string;
    ultimaPrestacion: Date;
    private materialesPrestados;
    constructor(id: number, nombre: string);
    prestar(material: Material): void;
    mostrarPrestados(): void;
    mostrarUltimaPrestacion(): void;
}
//# sourceMappingURL=Usuario.d.ts.map