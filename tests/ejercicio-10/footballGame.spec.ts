import { describe, test, expect, beforeEach} from "vitest";
import { FootballGame, Servicios} from "../../src/ejercicio-10/footballGame.js";
import { Observer } from "../../src/ejercicio-10/observer.js";
import { Observable } from "../../src/ejercicio-10/observable.js";

describe('FootballGame', () => {
    let servicio: Servicios;
    let servicio2: Servicios;
    let ar: Observer[];
    let partido: FootballGame;

    beforeEach(() => {
        servicio = new Servicios;
        servicio2 = new Servicios;
        ar = [servicio];
        partido = new FootballGame(ar);
    });

    test('debe añadir subscriptoes', () => {
        expect(partido.observers.length).toBe(1);
        partido.subscribe(servicio2);
        expect(partido.observers.length).toBe(2);
        
    });

    test('debe lanzar error si se intenta añadir un subscripto ya existente', () => {
        expect(() => partido.subscribe(servicio)).toThrow("Ya esta subscrito");
    });
    
    test('debe eliminar subscriptores', () => {
        partido.subscribe(servicio2);
        expect(partido.observers.length).toBe(2);
        partido.unsubscribe(servicio);
        expect(partido.observers.length).toBe(1);
    });
    
    test('debe notificar a los subscriptores', () => {
        partido.subscribe(servicio2);
        partido.inciaPartido();
        expect(partido.getEvent()).toBe("inicio del partido");
    });

    test('si no es intancia de FootballGame', () => {
        const observable: Observable = {
            subscribe(observer: Observer): void {},
            unsubscribe(observer: Observer): void {},
            notify(): void {}
        };
        servicio.update(observable);
        expect(observable).not.toBeInstanceOf(FootballGame);
    });

    test('si es intancia de FootballGame pero no es inicio del partido', () => {
        const observable: Observable = {
            subscribe(observer: Observer): void {},
            unsubscribe(observer: Observer): void {},
            notify(): void {}
        };
        const partido2 = new FootballGame([]);
        servicio.update(partido2);
        expect(partido2.getEvent()).not.toBe("inicio del partido"); 
    });
        

});