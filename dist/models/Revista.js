import { Material } from "./Material.js";
export class Revista extends Material {
    edicion;
    constructor(id, titulo, autor, edicion, disponible = true) {
        // llamar al costructor  o a un metodo de la clase padre (material)
        super(id, titulo, autor, disponible); //llama al constructor de materiales y les pasa esos valores
        this.edicion = edicion;
    }
    mostrarInfo() {
        console.log(`Revista: ${this.titulo}`);
        console.log(`ID: ${this.id}`);
        console.log(`Autor: ${this.autor}`);
        console.log(`Edición: ${this.edicion}`);
        console.log(`Disponible: ${this.isDisponible}`);
    }
}
//# sourceMappingURL=Revista.js.map