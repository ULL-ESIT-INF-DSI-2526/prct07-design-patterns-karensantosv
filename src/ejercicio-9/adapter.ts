import { WeatherApi } from './weatherApi.js';
import { WeatherService } from './weatherServices.js';

/**
 * Clase Adapter que implementa la interfaz WeatherService 
 * y adapta la clase WeatherApi para que pueda ser utilizada por el cliente sin depender directamente de WeatherApi
 */
export class Adapter implements WeatherService {

  /**
   * Método que obtiene la temperatura para una ciudad dada utilizando la clase WeatherApi
   * @param city - La ciudad para la cual se desea obtener la temperatura
   * @returns - La temperatura en grados Celsius para la ciudad dada obtenida a través de WeatherApi
   */
    getTemperature(city: string): number {
      return this.w.fetchWeatherData(city).tempCelsius;
    }
    constructor(public w: WeatherApi) {}
}

console.log("Temperatura: ");

let w: WeatherApi = new WeatherApi;
console.log(w.fetchWeatherData("aqui"));

// w.getTemperature("aqui");

// el cliente solo depende de weatherService 
// w se convierte en weatherservice
let wAdapted: WeatherService = new Adapter(w);
console.log(wAdapted.getTemperature("aqui"));