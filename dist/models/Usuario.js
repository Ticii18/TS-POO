export class Usuario {
    id;
    nombre;
    ultimaPrestacion;
    materialesPrestados = [];
    constructor(id, nombre) {
        this.id = id;
        this.nombre = nombre;
    }
    prestar(material) {
        if (material.isDisponible) {
            this.materialesPrestados.push(material);
            material.isDisponible = false;
            this.ultimaPrestacion = new Date();
            console.log(`${this.nombre} ha prestado: ${material.titulo}`);
        }
        else {
            console.log(`El material '${material.titulo}' no está disponible.`);
        }
    }
    mostrarPrestados() {
        if (this.materialesPrestados.length === 0) {
            console.log(`${this.nombre} no tiene materiales prestados.`);
            return;
        }
        console.log(`Materiales prestados por ${this.nombre}:`);
        this.materialesPrestados.forEach(mat => mat.mostrarInfo());
    }
    mostrarUltimaPrestacion() {
        if (this.ultimaPrestacion) {
            console.log(`Última prestación de ${this.nombre}: ${this.ultimaPrestacion.toLocaleString()}`);
        }
        else {
            console.log(`${this.nombre} aún no ha realizado ninguna prestación.`);
        }
    }
}
//# sourceMappingURL=Usuario.js.map