import React, { useEffect, useState } from 'react'
import Data from './data'
import "./weather.css"

const Weather = ({ handleCityName, weatherData, weatherError }) => {
    const [city, setCity] = useState("")
    const [error, setError] = useState("")
    const [data, setData] = useState(null)
    useEffect(() => {
        if (weatherError) {
            setError("City Does Not Exist")
            setTimeout(() => {
                setError("")
            }, 2000)
        }
        if (weatherData) {
            setData(weatherData)
        }
        return () => {
            setError("")
        }
    }, [weatherError, weatherData])

    return (
        <div className="weather-main">
            <div className="weather-sub">
                <div className="container bg-transparent">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="card bg-transparent">
                                <div className="card-body">
                                    {error && <div className="alert alert-danger">
                                        City Not Found
                                </div>}
                                </div>
                            </div>
                        </div>
                        <div className="col-md-8">
                            <div className="card bg-transparent">
                                <div className="card-body">
                                    <div className="form-group text-light">
                                        <label htmlFor="city">City Name
                                </label>
                                        <input
                                            type="text" className="form-control" placeholder="Enter City Name"
                                            value={city}
                                            onChange={e => setCity(e.target.value)}
                                        />
                                    </div>
                                    <button
                                        className="btn btn-primary btn-block"
                                        disabled={!city ? true : false}
                                        onClick={() => handleCityName(city)}
                                    >
                                        Enter
                                    </button>
                                </div>
                            </div>
                            <div className="text-light">
                                {data && <Data data={data} />}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Weather
