"use strict";
/**Ejercicio 1 - La academia Jedi
Imagine que tiene que diseñar el modelo de datos de una plataforma de gestión de una base de datos galáctica para una academia Jedi. A través del archivo central se puede acceder a diferentes tipos de recursos del universo: maestros Jedi, naves espaciales y holocrones (artefactos que almacenan conocimiento).

Defina una interfaz genérica GalacticRegistry<T> que especifique las propiedades y métodos con los que debería contar una colección concreta de entidades (por ejemplo, una colección de naves espaciales). También deberían definirse métodos de búsqueda que permitan obtener listados en función de distintos criterios:

Por nombre.
Por afiliación (República, Imperio, Sith, Independiente).
Por nivel de poder / clase.
Por año de construcción o formación.
Por planeta de origen.
Defina una clase abstracta genérica BasicGalacticCollection<T> que implemente dicha interfaz genérica.

En esta clase podrá implementar la lógica común (almacenamiento interno, inserción, eliminación, búsqueda básica por nombre, etc.).
Otros métodos más específicos deberán permanecer como abstractos, para obligar a que sean definidos en las subclases correspondientes.
Extienda la clase abstracta anterior para obtener subclases que modelen cada uno de los tres tipos de colecciones:

JediMasterCollection
StarshipCollection
HolocronCollection
Aplique los principios SOLID, prestando especial atención al diseño de la interfaz GalacticRegistry<T>. Si considera que la interfaz resulta demasiado extensa o con responsabilidades heterogéneas, divídala en interfaces genéricas más pequeñas (por ejemplo, SearchByAffiliation<T>, SearchByOriginPlanet<T>, PowerLevelQueryable<T>, etc.), con el objetivo de cumplir el principio Interface Segregation. Sería deseable un diseño que favorezca la extensibilidad, permitiendo añadir en el futuro nuevas entidades (por ejemplo, droides o especies alienígenas) sin modificar las clases existentes.
*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.HolocronCollection = exports.StarshipCollection = exports.JediMasterCollection = exports.BasicGalacticCollection = void 0;
class BasicGalacticCollection {
    entities = [];
    add(entity) {
        this.entities.push(entity);
    }
    remove(name) {
        this.entities = this.entities.filter(entity => entity.name !== name);
    }
    searchByName(name) {
        return this.entities.filter(entity => entity.name === name);
    }
    searchByOriginPlanet(planet) {
        return this.entities.filter(entity => entity.originPlanet === planet);
    }
}
exports.BasicGalacticCollection = BasicGalacticCollection;
class JediMasterCollection extends BasicGalacticCollection {
    searchByAffiliation(affiliation) {
        return this.entities.filter(jedi => jedi.affiliation === affiliation);
    }
    searchByPowerLevel(powerLevel) {
        return this.entities.filter(jedi => jedi.powerLevel === powerLevel);
    }
    searchByYear(year) {
        return this.entities.filter(jedi => jedi.yearOfFormation === year);
    }
}
exports.JediMasterCollection = JediMasterCollection;
class StarshipCollection extends BasicGalacticCollection {
    searchByAffiliation(affiliation) {
        return this.entities.filter(starship => starship.affiliation === affiliation);
    }
    searchByYear(year) {
        return this.entities.filter(starship => starship.yearOfConstruction === year);
    }
}
exports.StarshipCollection = StarshipCollection;
class HolocronCollection extends BasicGalacticCollection {
    searchByPowerLevel(powerLevel) {
        return this.entities.filter(holocron => holocron.powerLevel === powerLevel);
    }
}
exports.HolocronCollection = HolocronCollection;
