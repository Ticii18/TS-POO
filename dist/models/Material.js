export class Material {
    id;
    titulo;
    autor;
    disponible;
    constructor(id, titulo, autor, disponible = true) {
        this.id = id;
        this.titulo = titulo;
        this.autor = autor;
        this.disponible = disponible;
    }
    get isDisponible() {
        return this.disponible;
    }
    set isDisponible(valor) {
        this.disponible = valor;
    }
}
//# sourceMappingURL=Material.js.map