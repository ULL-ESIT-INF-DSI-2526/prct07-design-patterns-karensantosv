export interface Strategy {
    coste(peso: number): number;
}

export class EnvioEstandar implements Strategy {
    coste(peso: number): number {
        return peso * 3;
    }
}

export class EnvioUrgente implements Strategy {
    constructor( public distancia: number
    ) {}
    coste(peso: number): number {
        return (peso + this.distancia) * 3;
    }
}

export class EnvioInternacional implements Strategy {
    constructor(public tasafija: number,
                public distancia: number
    ) {}

    coste(peso: number): number {
        return this.tasafija + (this.distancia + peso ) * 3;
    }
}

export class Shipment {
    constructor(public peso: number,
                public strat: Strategy
    ) {}

    setEnvio(s: Strategy) {
        this.strat = s;
    }

    envio() {
        return this.strat.coste(this.peso);
    }
}


console.log("STRATEGIA");

const envio = new Shipment(12, new EnvioEstandar());
console.log(envio.envio());

envio.setEnvio(new EnvioInternacional(1000, 23));
console.log(envio.envio());

envio.setEnvio(new EnvioUrgente(55));
console.log(envio.envio());
