import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import WeatherChart from './WeatherChart';

const Season = () => {
  const { seasonName } = useParams();
  const [weather, setWeather] = useState(null);

  useEffect((seasonName ) => {
    const fetchWeather = async () => {
      try {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=Tokyo&appid=515be4723e193edc0185e9240370c7c2`);
        setWeather(response.data);
      } catch (error) {
        console.error('Error fetching weather data:', error);
      }
    };

    fetchWeather();
  }, []);

  return (
    <div>
       <h2>{seasonName.charAt(0).toUpperCase() + seasonName.slice(1)} in Japan</h2>
      <h3>Weather In Tokyo</h3>
      {weather ? (
        <p>{`Temperature: ${(weather.main.temp - 273.15).toFixed(2)} °C`}</p>
      ) : (
        <p>Loading weather data...</p>
      )}
      
      <div>
            <h1>{seasonName.charAt(0).toUpperCase() + seasonName.slice(1)} in Japan</h1>
            <WeatherChart city="Tokyo" />
        </div>
    </div>
  );
};

export default Season;
