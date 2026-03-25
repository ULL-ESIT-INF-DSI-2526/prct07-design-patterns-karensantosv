export abstract class TrainingRoutine {
    public rutinaEntrenamiento() {
        this.calentar();
        this.principal()
        this.descanso();
        this.ejercicioEspecial();
        this.resultadosEsperados();
    }
    
    protected calentar() : void {
        console.log("calentar");
    }
    protected abstract principal(): void;
    protected descanso(): void {
        console.log("descanso");
    }
    protected abstract ejercicioEspecial(): void;
    protected resultadosEsperados() {
        console.log("Resultados esperados....")
    }
}

export class WarriorTraining extends TrainingRoutine {
    protected principal(): void {
        console.log("Ejercicio principal del guerrero");
    }
    protected ejercicioEspecial(): void {
        console.log("Ejercicio especial del guerrero");
    }
}

export class MageTraining extends TrainingRoutine {
    protected principal(): void {
        console.log("Ejercicio principal del mago");
    }
    protected ejercicioEspecial(): void {
        console.log("Ejercicio especial del mago");
    }
}

export class ArcherTraining extends TrainingRoutine {
    protected principal(): void {
        console.log("Ejercicio principal del arquero");
    }
    protected ejercicioEspecial(): void {
        console.log("Ejercicio especial del arquero");
    }
}

console.log("TEMPLATE METHOD");

const warrior = new WarriorTraining();
warrior.rutinaEntrenamiento();

const mage = new MageTraining();
mage.rutinaEntrenamiento();

const archer = new ArcherTraining();
archer.rutinaEntrenamiento();