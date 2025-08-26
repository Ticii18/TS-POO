class Revista {
    id;
    titulo;
    fechaPublicacion;
    numeroEdicion;
    temas;
    precio;
    constructor(id, titulo, fechaPublicacion, numeroEdicion, temas, precio) {
        this.id = id;
        this.titulo = titulo;
        this.fechaPublicacion = fechaPublicacion;
        this.numeroEdicion = numeroEdicion;
        this.temas = temas;
        this.precio = precio;
    }
    publicarRevista() {
        console.log(`Revista publicada: ${this.titulo}`);
        this.getRevistaInfo();
    }
    getRevistaInfo() {
        console.log(`ID: ${this.id}`);
        console.log(`Título: ${this.titulo}`);
        console.log(`Fecha de Publicación: ${this.fechaPublicacion}`);
        console.log(`Número de Edición: ${this.numeroEdicion}`);
        console.log(`Temas: ${this.temas.join(", ")}`);
        console.log(`Precio: ${this.precio}`);
    }
}
export {};
//# sourceMappingURL=Revistas.js.map