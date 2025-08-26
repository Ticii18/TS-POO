class Usuario {
    id;
    nombre;
    email;
    password;
    constructor(id, nombre, email, password) {
        this.id = id;
        this.nombre = nombre;
        this.email = email;
        this.password = password;
        this.id = id;
        this.nombre = nombre;
        this.email = email;
        this.password = password;
    }
    registerUser() {
        console.log(`Usuario registrado: ${this.nombre}`);
    }
    getUserInfo() {
        console.log(`ID: ${this.id}`);
        console.log(`Nombre: ${this.nombre}`);
        console.log(`Email: ${this.email}`);
    }
}
export {};
//# sourceMappingURL=Usuarios.js.map