# Sistema de Gestión de Biblioteca

## Descripción

Este proyecto es una aplicación básica de consola para la gestión de una biblioteca, desarrollada en TypeScript usando Programación Orientada a Objetos (POO). Permite modelar materiales (libros y revistas) y usuarios que pueden pedir prestados dichos materiales.

## Estructura del Proyecto

    ```

POO-TS/
├── src/
│   ├── interfaces/
│   │   ├── IBibliotecaItem.ts
│   │   └── IUsuario.ts
│   ├── models/
│   │   ├── Libro.ts
│   │   ├── Material.ts
│   │   ├── Revista.ts
│   │   └── Usuario.ts
│   └── main.ts
├── package.json
├── tsconfig.json
└── nodemon.json
    ```

## Instalación y Ejecución

1. Instala las dependencias:

        ```bash
        npm install
        ```

2. Compila el proyecto:

        ```bash
        npx tsc
        ```

3. Ejecuta el código compilado:

        ```bash
        node dist/main.js
        ```

   O ejecuta directamente con ts-node:

        ```bash
        npx ts-node src/main.ts
        ```

## Investigación

### 1. ¿Qué diferencia existe entre `extends` e `implements` en TypeScript?

- `extends` se usa para heredar de una clase o interfaz, obteniendo sus propiedades y metodos.
- `implements` se usa para obligar a una clase a cumplir con la estructura de una interfaz, pero no hereda implementación.

### 2. ¿Qué ventajas ofrece el tipado fuerte en funciones y clases?

- Permite detectar errores en tiempo de compilación.
- Hace el código más seguro y fácil de mantener.

### 3. ¿Qué significa que una clase sea abstracta?

- Una clase abstracta no puede ser instanciada directamente.
- Sirve como base para otras clases, obligando a implementar ciertos métodos (abstractos) en las clases hijas.

### 4. ¿Por qué conviene usar getters y setters para el encapsulamiento?

- Permiten controlar el acceso y modificación de propiedades privadas o protegidas.
- Se pueden agregar validaciones o lógica extra al leer o modificar valores.

### 5. Ejemplos de tipado en funciones

#### a. Función con parámetros obligatorios y opcionales

    ```typescript
    function saludar(nombre: string, edad?: number): void {
    if (edad) {
        console.log(`Hola, ${nombre}. Tienes ${edad} años.`);
    } else {
        console.log(`Hola, ${nombre}.`);
    }
    }
    ```

#### b. Función que devuelve una Promise

    ```typescript
    function obtenerDatos(): Promise<string> {
    return new Promise(resolve => {
        setTimeout(() => resolve("Datos listos"), 1000);
    });
    }
    ```
