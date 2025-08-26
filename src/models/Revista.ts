import { Material } from "./Material.ts";

export class Revista extends Material {
    constructor(
        id: number,
        titulo: string,
        autor: string,
        public edicion: string,
        disponible: boolean = true
    ) {
        // llamar al costructor  o a un metodo de la clase padre (material)
        super(id, titulo, autor, disponible); //llama al constructor de materiales y les pasa esos valores
    }

    mostrarInfo(): void {
        console.log(`Revista: ${this.titulo}`);
        console.log(`ID: ${this.id}`);
        console.log(`Autor: ${this.autor}`);
        console.log(`Edición: ${this.edicion}`);
        console.log(`Disponible: ${this.isDisponible}`);
    }
}
