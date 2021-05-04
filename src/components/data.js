import React, { useEffect, useState } from 'react'
import UserMap from './userMap'

const Data = ({ data }) => {
    const { main, coord, name } = data
    const [showMap, setShowMap] = useState(false)
    useEffect(() => {
        setShowMap(false)
        // eslint-disable-next-line
    }, [data])
    return (
        <div className="mt-3">
            <div className="card bg-transparent">
                <div className="h1">
                    City: {name} <i className="fas fa-city"></i>
                </div>
                <div className="h3">
                    Temperature: {main.temp} <i className="fas fa-thermometer-full"></i>
                </div>
                <div className="h3">
                    Humidity: {main.humidity}
                </div>
                {!showMap && <button onClick={() => setShowMap(true)} className="btn btn-primary h3">
                    Show More <i className="fas fa-chevron-circle-right"></i>
                </button>}
            </div>
            {showMap ? <UserMap lat={coord.lat} lng={coord.lon} /> : null}

        </div>
    )
}

export default Data
