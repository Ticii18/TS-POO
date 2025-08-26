import type { Material } from "./Material.ts";
import type { IUsuario } from "../interfaces/IUsuario.ts";

export class Usuario implements IUsuario {
    public ultimaPrestacion!: Date;
    private materialesPrestados: Material[] = [];

    constructor(
        public id: number,
        public nombre: string
    ) {}


    prestar(material: Material): void {
        if (material.isDisponible) {
            this.materialesPrestados.push(material);
            material.isDisponible = false;
            this.ultimaPrestacion = new Date();
            console.log(`${this.nombre} ha prestado: ${material.titulo}`);
        } else {
            console.log(`El material '${material.titulo}' no está disponible.`);
        }
    }

    mostrarPrestados(): void {
        if (this.materialesPrestados.length === 0) {
            console.log(`${this.nombre} no tiene materiales prestados.`);
            return;
        }
        console.log(`Materiales prestados por ${this.nombre}: \n`);
        this.materialesPrestados.forEach(mat => mat.mostrarInfo());
        console.log("--------------------------")
    }

    mostrarUltimaPrestacion(): void {
        if (this.ultimaPrestacion) {
            console.log(`Última prestación de ${this.nombre}: ${this.ultimaPrestacion.toLocaleString()}`);
        } else {
            console.log(`${this.nombre} aún no ha realizado ninguna prestación.`);
        }
    }
}
