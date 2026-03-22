import { Recetas, rango } from "./receta";
/**
 * Clase RecipeTimeEstimator que se encarga de estimar el tiempo total de una receta.
 */
export declare class RecipeTimeEstimator {
    /**
     * Método para calcular el número de pasos de la receta
     * @returns - Número de pasos de la receta
     */
    numeroDePasos(receta: Recetas): number;
    /**
     * Método para calcular la duración total de la receta.
     * @returns - Duración total de la receta.
     */
    duracionTotal(receta: Recetas): number | rango;
}
