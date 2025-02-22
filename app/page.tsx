'use client';
import { useState, useEffect } from "react";
import SearchBar from "../components/SearchBar";
import WeatherCard from "../components/WeatherCard";
import { fetchWeather } from "../utils/fetchWeather";

interface WeatherData {
  name: string;
  main: { temp: number; humidity: number; pressure: number };
  wind: { speed: number };
  sys: { sunrise: number; sunset: number };
  weather: { description: string; icon: string }[];
}

const Home = () => {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  useEffect(() => {
    handleSearch("Al Mukalla");
  }, []);

  const handleSearch = async (city: string) => {
    setErrorMessage(null);

    const weather = await fetchWeather(city);

    if (!weather) {
      setWeatherData(null);
      setErrorMessage(`City "${city}" not found!`);
    } else {
      setWeatherData(weather);
    }
  };

  return (
    <div className="min-h-screen bg-gray-800 text-yellow-50">
      <div className="flex flex-col items-center justify-center p-6">
        <div className="w-full flex justify-center mb-6">
          <SearchBar onSearch={handleSearch} />
        </div>

        {errorMessage && <p className="text-red-400 mt-4 text-lg">{errorMessage}</p>}
        {weatherData && <WeatherCard weather={weatherData} />}
      </div>
    </div>
  );
};

export default Home;
