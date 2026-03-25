import { Observable } from "./observable.js";
import { Observer } from "./observer.js";

export type events =  "inicio del partido" | "gol" | "tarjeta amarilla" | "tarjeta roja" | "descanso" | "final del partido" | "nada"

export class FootballGame implements Observable {
    constructor(public observers: Observer[]) {}

    private event: events = "nada";

    getEvent() { return this.event; }

    subscribe(ob: Observer): void {
        if (this.observers.includes(ob)) {
            throw new Error("Ya esta subscrito");
        } else {
            this.observers.push(ob);
        }
    }

    unsubscribe(ob: Observer): void {
        this.observers = this.observers.filter((el) => el !== ob);
        // const i = this.observers.indexOf(ob);
        // if (i === -1) {
        //     throw new Error("No esta");
        // } else {
        //     this.observers.splice(i, 1);
        // }
    }

    notify(): void {
        this.observers.forEach((cadaUno) => { cadaUno.update(this)});
    }

    inciaPartido() {
        this.event = "inicio del partido";
        this.notify();
    }
}

export class Servicios implements Observer {

    update(observable: Observable): void {
        if (observable instanceof FootballGame) {
            if (observable.getEvent() === "inicio del partido") {
                console.log("Se da inicio al partido!....");
            } else {
                console.log("Evento: ", observable.getEvent());
            }
        } else {
            console.log("No es un partido de futbol");
        }
    }
}

console.log("Partido");
let servicio: Servicios = new Servicios;
let servicio2: Servicios = new Servicios;
let ar: Observer[] = [servicio];
let partido: FootballGame = new FootballGame(ar);
partido.subscribe(servicio2);

console.log("inicia el partido");
partido.inciaPartido();

console.log("uno se unsuscrube");
partido.unsubscribe(servicio);
partido.inciaPartido();
