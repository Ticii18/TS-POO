import { Libro } from "./models/Libro";
import { Revista } from "./models/Revista";
import { Usuario } from "./models/Usuario";

const libro1 = new Libro(1, "Don Quijote", "Miguel de Cervantes Saavedra", 618, "Novela", false);
const libro2 = new Libro(2, "El Principito", "Antoine de Saint-Exupéry", 96, "Novela", true);


const revista1 = new Revista(3, "National Geographic", "Varios", "Agosto 2025");


const usuario1 = new Usuario(1, "Juan Pérez");





console.log("\n==============================");
console.log("= Préstamos de materiales =");
console.log("==============================\n");


usuario1.prestar(libro1);
usuario1.prestar(revista1);
usuario1.prestar(libro2);

console.log("\n------------------------------");
usuario1.mostrarPrestados();
console.log("------------------------------\n");

usuario1.mostrarUltimaPrestacion();

console.log("\n==============================");
console.log("= Estado de todos los materiales =");
console.log("==============================\n");

const materiales = [libro1, libro2, revista1];
materiales.forEach((mat, idx) => {
	console.log(`Material #${idx + 1}`);
	mat.mostrarInfo();
	console.log("------------------------------");
});
