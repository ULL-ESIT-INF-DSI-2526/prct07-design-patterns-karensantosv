import { describe, expect, test, beforeEach } from 'vitest';
import { RecommendationEngine } from '../../src/ejercicio-6/strategy.js';
import { PopularStrategy } from '../../src/ejercicio-6/strategy.js';
import { HistoryBasedStrategy } from '../../src/ejercicio-6/strategy.js';
import { SimilarContentStrategy } from '../../src/ejercicio-6/strategy.js';

describe('RecommendationEngine', () => {
    const userId = "testUser";
    let engine: RecommendationEngine;

    beforeEach(() => {
        engine = new RecommendationEngine(new PopularStrategy(), userId);
    });

    describe('PopularStrategy', () => {
        test('should return popular recommendations', () => {
            const recommendations = engine.getRecommendations();
            expect(recommendations).toEqual(["Contenido Popular 1", "Contenido Popular 2", "Contenido Popular 3"]);
        });
    });

    describe('HistoryBasedStrategy', () => {
        test('should return history-based recommendations', () => {
            engine.setStrategy(new HistoryBasedStrategy());
            const recommendations = engine.getRecommendations();
            expect(recommendations).toEqual([`Recomendación basada en historial para ${userId}`]);
        });
    });

    describe('SimilarContentStrategy', () => {
        test('should return similar content recommendations', () => {
            engine.setStrategy(new SimilarContentStrategy());
            const recommendations = engine.getRecommendations();
            expect(recommendations).toEqual(["Contenido Similar 1", "Contenido Similar 2", "Contenido Similar 3"]);
        });
    });
});