import { Chef } from "./chef";
import { Recetas } from "./receta";
import { Paso } from "./paso";
import { Repository, SearchByName, SearchByTags, SearchByYearRange } from "./interfaz";
/**El sistema debe permitir:

Almacenar chefs y sus recetarios.
Mostrar toda la información en tablas.
Buscar:

chefs (por nombre, por mínimo de seguidores)
recetas (por nombre, por año/rango de años)
pasos (por nombre, por etiqueta, por opcionalidad)
Los resultados de cualquier búsqueda deben poder presentarse en formato tabla usando el servicio de presentación. */
export declare class ManejarRecetario implements Repository<Chef, string>, SearchByName<Chef | Recetas | Paso>, SearchByTags<Paso>, SearchByYearRange<Recetas> {
    private chefs;
    constructor(chefs: Chef[]);
    add(item: Chef): void;
    remove(id: string): void;
    getById(id: string): Chef | undefined;
    getAll(): Chef[];
    searchByName(n: string): (Chef | Recetas | Paso)[];
    searchByTags(tag: string): Paso[];
    searchByOptionality(opcional: boolean): Paso[];
    searchByYearRange(start: number, end: number): Recetas[];
    searchByMinFollowers(min: number): Chef[];
}
