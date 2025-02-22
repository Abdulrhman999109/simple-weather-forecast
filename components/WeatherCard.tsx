interface WeatherCardProps {
  weather: {
    name: string;
    main: { temp: number; humidity: number; pressure: number };
    wind: { speed: number };
    sys: { sunrise: number; sunset: number };
    weather: { description: string; icon: string }[];
  };
}

const WeatherCard: React.FC<WeatherCardProps> = ({ weather }) => {
  const sunriseTime = new Date(weather.sys.sunrise * 1000).toLocaleTimeString();
  const sunsetTime = new Date(weather.sys.sunset * 1000).toLocaleTimeString();

  return (
    <div className="bg-yellow-50 p-6 rounded-lg shadow-xl text-center w-full max-w-lg transition-all duration-500 text-gray-900">
      <h2 className="text-4xl font-bold">{weather.name}</h2>
      <img
        src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
        alt="Weather Icon"
        className="mx-auto w-20 h-20"
      />
      <p className="text-3xl font-semibold text-gray-900">{weather.main.temp}°C</p>
      <p className="text-gray-700 capitalize text-lg">{weather.weather[0].description}</p>

      {/* ✅ معلومات إضافية */}
      <div className="grid grid-cols-2 gap-4 text-gray-800 mt-4">
        <p>💧 Humidity: {weather.main.humidity}%</p>
        <p>🌬️ Wind: {weather.wind.speed} m/s</p>
        <p>🌡️ Pressure: {weather.main.pressure} hPa</p>
        <p>🌅 Sunrise: {sunriseTime}</p>
        <p>🌇 Sunset: {sunsetTime}</p>
      </div>
    </div>
  );
};

export default WeatherCard;
