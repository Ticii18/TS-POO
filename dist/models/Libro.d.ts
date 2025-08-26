import { Material } from "./Material.ts";
export declare class Libro extends Material {
    paginas: number;
    genero?: string | undefined;
    constructor(id: number, titulo: string, autor: string, paginas: number, genero?: string | undefined, disponible?: boolean);
    mostrarInfo(): void;
}
//# sourceMappingURL=Libro.d.ts.map