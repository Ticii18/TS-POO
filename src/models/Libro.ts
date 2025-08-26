import { Material } from "./Material.ts";

export class Libro extends Material {
    constructor(
        id: number,
        titulo: string,
        autor: string,
        public paginas: number,
        public genero?: string,
        disponible: boolean = true
    ) {
        super(id, titulo, autor, disponible);
    }

    mostrarInfo(): void {
        console.log(`Libro: ${this.titulo}`);
        console.log(`ID: ${this.id}`);
        console.log(`Autor: ${this.autor}`);
        console.log(`Páginas: ${this.paginas}`);
        if (this.genero) {
            console.log(`Género: ${this.genero}`);
        }
        console.log(`Disponible: ${this.isDisponible}`);
    }
}