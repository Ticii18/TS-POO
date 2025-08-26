import { Material } from "./Material.js";
export class Libro extends Material {
    paginas;
    genero;
    constructor(id, titulo, autor, paginas, genero, disponible = true) {
        super(id, titulo, autor, disponible);
        this.paginas = paginas;
        this.genero = genero;
    }
    mostrarInfo() {
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
//# sourceMappingURL=Libro.js.map