'use client'
import { useState, useEffect } from "react";
import { WeatherData, ForecastData } from "../app/types";
import SearchBar from "../components/SearchBar";
import WeatherCard from "../components/WeatherCard";
import { fetchWeather, fetchForecast } from "../utils/fetchWeather";

const Home = () => {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [forecastData, setForecastData] = useState<ForecastData | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  useEffect(() => {
    handleSearch("Al Mukalla");
  }, []);

  const handleSearch = async (city: string) => {
    setErrorMessage(null);
    
    const weather = await fetchWeather(city);
    const forecast = await fetchForecast(city);

    if (!weather || !forecast) {
      setWeatherData(null);
      setForecastData(null);
      setErrorMessage(` City "${city}" not found!`);
    } else {
      setWeatherData(weather);
      setForecastData(forecast);
    }
  };

  return (
    <div className="min-h-screen bg-gray-800 text-yellow-50">
      
      
      <div className="flex flex-col items-center justify-center p-6">
        <div className="w-full flex justify-center mb-6">
          <SearchBar onSearch={handleSearch} />
        </div>

        {errorMessage && <p className="text-red-400 mt-4 text-lg">{errorMessage}</p>}
        {weatherData && forecastData && <WeatherCard weather={weatherData} forecast={forecastData} />}
      </div>
    </div>
  );
};

export default Home;
