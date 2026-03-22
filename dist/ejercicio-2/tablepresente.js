"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TablePresenter = void 0;
const manejarRecetario_1 = require("./manejarRecetario");
const chef_1 = require("./chef");
const receta_1 = require("./receta");
const paso_1 = require("./paso");
/**
 * Clase para presentar datos en formato tabla.
 */
class TablePresenter {
    /**
     * Método para mostrar los datos en formato tabla
     * @param data - Array de datos a mostrar en la tabla
     * @returns void
     */
    showData(data) {
        if (data && data.length > 0) {
            console.table(data);
        }
        else {
            console.log("No hay resultados para mostrar.");
        }
    }
}
exports.TablePresenter = TablePresenter;
let listaDeChefs = [
    new chef_1.Chef("Gordon Ramsay", 1000000, [
        new receta_1.Recetas("Beef Wellington", 2005, [
            new paso_1.Paso("Preparar la carne", 600, ["carne", "preparación"], false, 0),
            new paso_1.Paso("Hornear", 1800, ["horno", "cocción"], false, 0),
            new paso_1.Paso("Reposar", 300, ["reposo"], true, 0)
        ])
    ]),
    new chef_1.Chef("Jamie Oliver", 500000, [
        new receta_1.Recetas("Pasta al Pesto", 2010, [
            new paso_1.Paso("Cocer la pasta", 600, ["pasta", "cocción"], false, 0),
            new paso_1.Paso("Preparar el pesto", 300, ["pesto", "preparación"], false, 0),
            new paso_1.Paso("Mezclar y servir", 200, ["mezcla", "servir"], false, 0)
        ])
    ]),
    new chef_1.Chef("Alice Waters", 200000, [
        new receta_1.Recetas("Ensalada de Quinoa", 2015, [
            new paso_1.Paso("Cocer la quinoa", 600, ["quinoa", "cocción"], false, 0),
            new paso_1.Paso("Preparar el aderezo", 300, ["aderezo", "preparación"], false, 0),
            new paso_1.Paso("Mezclar y servir", 200, ["mezcla", "servir"], false, 0)
        ])
    ])
];
const manejador = new manejarRecetario_1.ManejarRecetario(listaDeChefs);
const presentador = new TablePresenter();
console.log("--- TODOS LOS CHEFS ---");
presentador.showData(manejador.getAll());
console.log("--- BÚSQUEDA: Pasos con la etiqueta 'cocción' ---");
const pasosCoccion = manejador.searchByTags("cocción");
presentador.showData(pasosCoccion);
console.log("--- BÚSQUEDA: Recetas entre 2005 y 2012 ---");
const recetasRango = manejador.searchByYearRange(2005, 2012);
presentador.showData(recetasRango);
console.log("--- BÚSQUEDA: Pasos opcionales ---");
const opcionales = manejador.searchByOptionality(true);
presentador.showData(opcionales);
