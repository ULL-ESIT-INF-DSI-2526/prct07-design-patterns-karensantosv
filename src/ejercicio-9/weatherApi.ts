/**
 * Clase WeatherApi que simula la obtención de datos meteorológicos para una ubicación dada
 */
export class WeatherApi {
  /**
   * Método que simula la obtención de datos meteorológicos para una ubicación dada
   * @param location - La ubicación para la cual se desean obtener los datos meteorológicos
   * @returns - Un objeto que contiene la temperatura en grados Celsius y la humedad para la ubicación dada
   */
  fetchWeatherData(location: string): { tempCelsius: number; humidity: number } {
    return { tempCelsius: 23, humidity: 60 };
  }
}