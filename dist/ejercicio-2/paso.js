"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PasoConTemperatura = exports.Paso = void 0;
/**
 * Clase Paso que representa un paso de una receta de cocina.
 */
class Paso {
    /**
     * Constructor de la clase Paso
     * @param nombre - Nombre del paso de la receta
     * @param duracion - Duración del paso en segundos
     * @param etiquetas - Array de etiquetas que describen el paso.
     * @param opcional - Booleano que indica si el paso es opcional o no
     * @param vecesCompletado - Número de veces que se ha completado el paso (inicialmente 0)
     */
    constructor(nombre, duracion, etiquetas, opcional, vecesCompletado) {
        this.nombre = nombre;
        this.duracion = duracion;
        this.etiquetas = etiquetas;
        this.esOpcional = opcional;
        this.vecesCompletado = vecesCompletado;
    }
    nombre;
    duracion;
    etiquetas;
    esOpcional;
    vecesCompletado;
}
exports.Paso = Paso;
class PasoConTemperatura extends Paso {
    constructor(nombre, duracion, etiquetas, opcional, vecesCompletado, temperatura) {
        super(nombre, duracion, etiquetas, opcional, vecesCompletado);
        this.temperatura = temperatura;
    }
    temperatura;
}
exports.PasoConTemperatura = PasoConTemperatura;
