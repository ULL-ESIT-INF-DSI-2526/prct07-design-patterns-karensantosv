import {  describe, test, expect } from 'vitest';
import { GameFacade, SaveSystem, GraphicsEngine, AudioEngine, PhysicsEngine, InputManager, NetworkManager } from '../../src/ejercicio-5/gameFacade.js';

describe('GameFacade', () => {
    const game = new GameFacade(new GraphicsEngine(), new AudioEngine(), new PhysicsEngine(), new InputManager(), new SaveSystem(), new NetworkManager());
    test('deberia iniciar el juego correctamente', () => {
        game.startGame();
        expect(game).toBeInstanceOf(GameFacade);
    });

    test('deberia terminar el juego correctamente', () => {
        game.shutdownGame();
        expect(game).toBeInstanceOf(GameFacade);
    });

    test('deberia cargar un juego guardado correctamente', () => {
        game.loadSavedGame(1);
        expect(game).toBeInstanceOf(GameFacade);
    });
});