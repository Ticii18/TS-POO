import { Libro } from "./models/Libro.ts";
import { Revista } from "./models/Revista.ts";
import { Usuario } from "./models/Usuario.ts";
// Crear libros
const libro1 = new Libro(1, "Cien Años de Soledad", "Gabriel García Márquez", 417, "Novela");
const libro2 = new Libro(2, "El Principito", "Antoine de Saint-Exupéry", 96);
// Crear revista
const revista1 = new Revista(3, "National Geographic", "Varios", "Agosto 2025");
// Crear usuario
const usuario1 = new Usuario(1, "Juan Pérez");
// Pruebas de préstamo
usuario1.prestar(libro1);
usuario1.prestar(revista1);
usuario1.prestar(libro2);
// Mostrar materiales prestados
usuario1.mostrarPrestados();
usuario1.mostrarUltimaPrestacion();
// Polimorfismo: mostrarInfo
const materiales = [libro1, libro2, revista1];
console.log("\nDemostración de polimorfismo:");
materiales.forEach(mat => mat.mostrarInfo());
//# sourceMappingURL=main.js.map