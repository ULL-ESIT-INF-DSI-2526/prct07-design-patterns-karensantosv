export interface RecommendationStrategy {
    recommend(userId: string): string[];
}

export class PopularStrategy implements RecommendationStrategy {
    recommend(userId: string): string[] {
        return ["Contenido Popular 1", "Contenido Popular 2", "Contenido Popular 3"];
    }
}

export class HistoryBasedStrategy implements RecommendationStrategy {
    recommend(userId: string): string[] {
        return [`Recomendación basada en historial para ${userId}`];
    }
}

export class SimilarContentStrategy implements RecommendationStrategy {
    recommend(userId: string): string[] {
        return ["Contenido Similar 1", "Contenido Similar 2", "Contenido Similar 3"];
    }
}

export class RecommendationEngine {
    private strategy: RecommendationStrategy;

    constructor(strategy: RecommendationStrategy, public userId: string) {
        this.strategy = strategy;
    }

    setStrategy(strategy: RecommendationStrategy) {
        this.strategy = strategy;
    }

    getRecommendations(): string[] {
        return this.strategy.recommend(this.userId);
    }
}

// Simulación
const userId = "usuario123";
const engine = new RecommendationEngine(new PopularStrategy(), userId);
console.log("Recomendaciones Populares:", engine.getRecommendations());

engine.setStrategy(new HistoryBasedStrategy());
console.log("Recomendaciones Basadas en Historial:", engine.getRecommendations());

engine.setStrategy(new SimilarContentStrategy());
console.log("Recomendaciones Basadas en Contenido Similar:", engine.getRecommendations());