"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Recetas = void 0;
/**
 * Clase Recetas que representa una receta de cocina. Tiene un nombre, una fecha de publicación y un array de pasos.
 */
class Recetas {
    /**
     * Constructor de la clase Recetas que inicializa el nombre, fecha de publicación y pasos de la receta.
     * @param nombre - Nombre de la receta
     * @param publicacion - Año de publicación de la receta
     * @param pasos - Array de pasos que forman la receta, cada paso es una instancia de la clase Paso
     */
    constructor(nombre, publicacion, pasos) {
        this.nombre = nombre;
        this.publicacion = publicacion;
        this.pasos = pasos;
    }
    nombre;
    publicacion;
    pasos;
}
exports.Recetas = Recetas;
