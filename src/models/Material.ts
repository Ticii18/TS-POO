import type { IBibliotecaItem } from "../interfaces/lBibliotecaItem.ts";

export abstract class Material implements IBibliotecaItem {
    constructor(
        public readonly id: number,
        public titulo: string,
        public autor: string,
        protected disponible: boolean = true
    ) {}

    get isDisponible(): boolean {
        return this.disponible;
    }

    set isDisponible(valor: boolean) {
        this.disponible = valor;
    }

    abstract mostrarInfo(): void;
}