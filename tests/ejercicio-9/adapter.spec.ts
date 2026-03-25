import { describe, test, expect } from 'vitest';
import { Adapter } from '../../src/ejercicio-9/adapter.js';
import { WeatherApi } from '../../src/ejercicio-9/weatherApi.js';
import { WeatherService } from '../../src/ejercicio-9/weatherServices.js';

describe('Adapter', () => {
    test('debe poder usarse con WeatherApi', () => {
       let w = new WeatherApi();
       let adapter = new Adapter(w);
       expect(adapter.getTemperature("aqui")).toBe(w.fetchWeatherData("aqui").tempCelsius); 
    });
});