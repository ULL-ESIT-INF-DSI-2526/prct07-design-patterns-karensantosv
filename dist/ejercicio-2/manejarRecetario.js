"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ManejarRecetario = void 0;
/**El sistema debe permitir:

Almacenar chefs y sus recetarios.
Mostrar toda la información en tablas.
Buscar:

chefs (por nombre, por mínimo de seguidores)
recetas (por nombre, por año/rango de años)
pasos (por nombre, por etiqueta, por opcionalidad)
Los resultados de cualquier búsqueda deben poder presentarse en formato tabla usando el servicio de presentación. */
class ManejarRecetario {
    chefs;
    constructor(chefs) {
        this.chefs = chefs;
    }
    add(item) { this.chefs.push(item); }
    remove(id) { this.chefs = this.chefs.filter(c => c.nombre !== id); }
    getById(id) { return this.chefs.find(c => c.nombre === id); }
    getAll() { return this.chefs; }
    searchByName(n) {
        const resultados = [];
        // chef
        const chefsEncontrados = this.chefs.filter(c => c.nombre === n);
        resultados.push(...chefsEncontrados);
        // Recetas y Pasos
        this.chefs.forEach(chef => {
            chef.recetario.forEach(receta => {
                if (receta.nombre === n)
                    resultados.push(receta);
                receta.pasos.forEach(paso => {
                    if (paso.nombre === n)
                        resultados.push(paso);
                });
            });
        });
        return resultados;
    }
    // por etiquetas
    searchByTags(tag) {
        const encontrado = [];
        this.chefs.forEach(el => {
            el.recetario.forEach(el2 => {
                el2.pasos.forEach(el3 => {
                    if (el3.etiquetas.includes(tag))
                        encontrado.push(el3);
                });
            });
        });
        return encontrado;
    }
    // por opcionalidad
    searchByOptionality(opcional) {
        const encontrado = [];
        this.chefs.forEach(el => {
            el.recetario.forEach(el2 => {
                el2.pasos.forEach(el3 => {
                    if (el3.esOpcional === opcional)
                        encontrado.push(el3);
                });
            });
        });
        return encontrado;
    }
    // por rango
    searchByYearRange(start, end) {
        const encontrado = [];
        this.chefs.forEach(el => {
            el.recetario.forEach(el2 => {
                if (el2.publicacion >= start && el2.publicacion <= end)
                    encontrado.push(el2);
            });
        });
        return encontrado;
    }
    // seguidores
    searchByMinFollowers(min) {
        return this.chefs.filter(c => c.seguidores >= min);
    }
}
exports.ManejarRecetario = ManejarRecetario;
