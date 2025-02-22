import axios from "axios";

const API_KEY = process.env.NEXT_PUBLIC_WEATHER_API_KEY;
const WEATHER_URL = "https://api.openweathermap.org/data/2.5/weather";
const FORECAST_URL = "https://api.openweathermap.org/data/2.5/forecast";

interface WeatherData {
  name: string;
  main: { temp: number; humidity: number; pressure: number };
  wind: { speed: number };
  sys: { sunrise: number; sunset: number };
  weather: { description: string; icon: string; main: string }[];
}

interface ForecastData {
  list: {
    dt_txt: string;
    main: { temp: number };
    weather: { description: string; icon: string }[];
  }[];
}

export const fetchWeather = async (city: string): Promise<WeatherData | null> => {
  try {
    const response = await axios.get(WEATHER_URL, {
      params: { q: city, units: "metric", appid: API_KEY },
    });
    return response.data as WeatherData;
  } catch (error: any) {
    if (error.response?.status === 404) {
      console.warn(`City "${city}" not found.`);
      return null; 
    }
    console.error("Error fetching weather data:", error);
    return null;
  }
};

export const fetchForecast = async (city: string): Promise<ForecastData | null> => {
  try {
    const response = await axios.get(FORECAST_URL, {
      params: { q: city, units: "metric", cnt: 7, appid: API_KEY },
    });
    return response.data as ForecastData;
  } catch (error: any) {
    console.warn("Error fetching forecast data:", error);
    return null;
  }
};
