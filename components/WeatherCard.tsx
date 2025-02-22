interface ForecastData {
    list: {
      dt_txt: string;
      main: { temp: number };
      weather: { description: string; icon: string }[];
    }[];
  }
  
  interface WeatherCardProps {
    weather: {
      name: string;
      main: { temp: number; humidity: number; pressure: number };
      wind: { speed: number };
      sys: { sunrise: number; sunset: number };
      weather: { description: string; icon: string }[];
    };
    forecast: ForecastData;
  }
  
  const WeatherCard: React.FC<WeatherCardProps> = ({ weather, forecast }) => {
    const sunriseTime = new Date(weather.sys.sunrise * 1000).toLocaleTimeString();
    const sunsetTime = new Date(weather.sys.sunset * 1000).toLocaleTimeString();
  
    return (
      <div className="bg-yellow-50 p-6 rounded-lg shadow-xl text-center w-full max-w-lg transition-all duration-500 text-gray-900">
        <h2 className="text-4xl font-bold">{weather.name}</h2>
        <img
          src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
          alt="Weather Icon"
          className="mx-auto"
        />
        <p className="text-3xl font-semibold text-gray-900">{weather.main.temp}°C</p>
        <p className="text-gray-700 capitalize text-lg">{weather.weather[0].description}</p>
  
        <div className="grid grid-cols-2 gap-4 text-gray-800 mt-4">
          <p>💧 Humidity: {weather.main.humidity}%</p>
          <p>🌬️ Wind: {weather.wind.speed} m/s</p>
          <p>🌡️ Pressure: {weather.main.pressure} hPa</p>
          <p>🌅 Sunrise: {sunriseTime}</p>
          <p>🌇 Sunset: {sunsetTime}</p>
        </div>
  
        <h3 className="text-2xl font-bold mt-6">Upcoming 6-Day Forecast</h3>
        <div className="grid grid-cols-3 gap-3 text-sm mt-3">
          {forecast.list.slice(1, 7).map((day, index) => (
            <div
              key={index}
              className="p-3 bg-gray-200 rounded-lg shadow-md transition-all duration-300 hover:scale-110 hover:shadow-xl hover:bg-gray-300 hover:-translate-y-2 text-gray-900 cursor-pointer"
            >
              <p className="font-semibold">{new Date(day.dt_txt).toLocaleDateString()}</p>
              <img
                src={`https://openweathermap.org/img/wn/${day.weather[0].icon}.png`}
                alt="icon"
                className="mx-auto"
              />
              <p className="text-xl text-gray-900">{day.main.temp}°C</p>
              <p className="text-xs">{day.weather[0].description}</p>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default WeatherCard;
  