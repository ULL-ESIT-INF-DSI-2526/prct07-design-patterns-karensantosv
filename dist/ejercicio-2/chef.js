"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Chef = void 0;
/**
 * Clase Chef que representa a un chef con un nombre, número de seguidores y un recetario que contiene sus recetas.
 */
class Chef {
    /**
     * Constructor de la clase Chef que inicializa el nombre, número de seguidores y recetario del chef.
     * @param nombre - Nombre del chef
     * @param seguidores - Número de seguidores del chef
     * @param recetario - Array de recetas que forman el recetario del chef, cada receta es una instancia de la clase Recetas
     */
    constructor(nombre, seguidores, recetario) {
        this.nombre = nombre;
        this.seguidores = seguidores;
        this.recetario = recetario;
    }
    nombre;
    seguidores;
    recetario;
}
exports.Chef = Chef;
