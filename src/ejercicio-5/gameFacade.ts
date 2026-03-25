export class GraphicsEngine {
    initialize() {
        console.log("Graphics Engine initialized.");
    }
    shutdown() {
        console.log("Graphics Engine shutdown.");
    }
}

export class SaveSystem {
    initialize() {
        console.log("Save System initialized.");
    }
    shutdown() {
        console.log("Save System shutdown.");
    }
    loadGame(slot: number) {
        console.log(`Game loaded from slot ${slot}.`);
    }
}

export class NetworkManager {
    connect() {
        console.log("Network Manager connected.");
    }
    disconnect() {
        console.log("Network Manager disconnected.");
    }
}

export class AudioEngine {
    initialize() {
        console.log("Audio Engine initialized.");
    }
    shutdown() {
        console.log("Audio Engine shutdown.");
    }
}

export class PhysicsEngine {
    initialize() {
        console.log("Physics Engine initialized.");
    }
    shutdown() {
        console.log("Physics Engine shutdown.");
    }
}

export class InputManager {
    initialize() {
        console.log("Input Manager initialized.");
    }
    shutdown() {
        console.log("Input Manager shutdown.");
    }
}

export class GameFacade {
    constructor( public graphicsEngine: GraphicsEngine,
                 public audioEngine: AudioEngine,
                 public physicsEngine: PhysicsEngine,
                 public inputManager: InputManager,
                 public saveSystem: SaveSystem,
                 public networkManager: NetworkManager)  {
    }

    startGame() {
        this.graphicsEngine.initialize();
        this.audioEngine.initialize();
        this.physicsEngine.initialize();
        this.inputManager.initialize();
        this.saveSystem.initialize();
        this.networkManager.connect();
        console.log("Game started");
    }

    loadSavedGame(slot: number) {
        this.startGame();
        this.saveSystem.loadGame(slot);
    }

    shutdownGame() {
        this.networkManager.disconnect();
        this.saveSystem.shutdown();
        this.inputManager.shutdown();
        this.physicsEngine.shutdown();
        this.audioEngine.shutdown();
        this.graphicsEngine.shutdown();
        console.log("Game shutdown.");
    }
}

// Simulación
const game = new GameFacade(new GraphicsEngine(), new AudioEngine(), new PhysicsEngine(), new InputManager(), new SaveSystem(), new NetworkManager());
game.startGame();
console.log("------------------------");
game.loadSavedGame(1);
console.log("------------------------");
game.shutdownGame();