import React, { useState } from "react"
import axios from "axios"
import Weather from "./components/weather"
import Navbar from "./components/navbar"

function App() {
  const [weatherData, setWeatherData] = useState(null)
  const [weatherError, setWeatherError] = useState(null)

  const handleCityName = (name) => {
    axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${name}&appid=${process.env.WEATHER_API_KEY}&units=metric`)
      .then(res => setWeatherData(res.data))
      .catch(err => setWeatherError(err.message))
    setTimeout(() => {
      setWeatherError(null)
    }, 2000);
  }
  return (
    <div>
      <Navbar />
      <Weather
        weatherData={weatherData}
        weatherError={weatherError}
        handleCityName={handleCityName}
      />
    </div>
  );
}

export default App;
