import { WeatherApi } from './weatherApi.js';
import { WeatherService } from './weatherServices.js';

export class Adapter implements WeatherService {
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