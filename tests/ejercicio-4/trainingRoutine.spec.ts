import { describe, test, expect } from 'vitest'
import { TrainingRoutine, WarriorTraining, ArcherTraining, MageTraining } from '../../src/ejercicio-4/trainingRoutine.js'

describe('TrainingRoutine', () => {
    test('debería ejecutar la rutina de entrenamiento del guerrero correctamente', () => {
        const warrior = new WarriorTraining();
        expect(() => warrior.rutinaEntrenamiento()).not.toThrow();
    });

    test('debería ejecutar la rutina de entrenamiento del mago correctamente', () => {
        const mage = new MageTraining();
        expect(() => mage.rutinaEntrenamiento()).not.toThrow();
    });

    test('debería ejecutar la rutina de entrenamiento del arquero correctamente', () => {
        const archer = new ArcherTraining();
        expect(() => archer.rutinaEntrenamiento()).not.toThrow();
    });
});