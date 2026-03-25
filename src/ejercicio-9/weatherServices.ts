/**
 * Interfaz WeatherService que define el método getTemperature para obtener la temperatura de una ciudad dada
 */
export interface WeatherService {
  getTemperature(city: string): number;
}