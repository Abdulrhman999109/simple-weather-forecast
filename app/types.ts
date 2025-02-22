export interface WeatherData {
    name: string;
    main: {
      temp: number;
      humidity: number;
      pressure: number;
    };
    wind: {
      speed: number;
    };
    sys: {
      sunrise: number;
      sunset: number;
    };
    weather: {
      description: string;
      icon: string;
    }[];
  }
  
  export interface ForecastData {
    list: {
      dt_txt: string;
      main: {
        temp: number;
      };
      weather: {
        description: string;
        icon: string;
      }[];
    }[];
  }
  