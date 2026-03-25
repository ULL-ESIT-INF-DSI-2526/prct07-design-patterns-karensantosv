export class WeatherApi {
  fetchWeatherData(location: string): { tempCelsius: number; humidity: number } {
    return { tempCelsius: 23, humidity: 60 };
  }
}