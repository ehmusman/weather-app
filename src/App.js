import React, { useState } from "react"
import axios from "axios"
import Weather from "./components/weather"
import Navbar from "./components/navbar"

function App() {
  const [weatherData, setWeatherData] = useState(null)
  const [weatherError, setWeatherError] = useState(null)

  const handleCityName = (name) => {
    axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${name}&appid=b9721047fe209e96c36dcec04a42d9e5&units=metric`)
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
