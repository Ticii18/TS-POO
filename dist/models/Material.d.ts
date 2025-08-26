import type { IBibliotecaItem } from "../interfaces/lBibliotecaItem.ts";
export declare abstract class Material implements IBibliotecaItem {
    readonly id: number;
    titulo: string;
    autor: string;
    protected disponible: boolean;
    constructor(id: number, titulo: string, autor: string, disponible?: boolean);
    get isDisponible(): boolean;
    set isDisponible(valor: boolean);
    abstract mostrarInfo(): void;
}
//# sourceMappingURL=Material.d.ts.map