import React, { useState, useEffect } from 'react';

const Weathercard = ({ tempInfo }) => {
    // receiving tempInfo as  props

    const [weatherState, setWeatherState] = useState("");

    const {     //destructuring 
        temp,
        humidity,
        pressure,
        weathermood,
        name,
        speed,
        country,
        sunset,
    } = tempInfo;


    useEffect(() => {
        if (weathermood) { // agar muhhe weathermood ka data mila tohi

            switch (weathermood) {
                case "Clouds":
                    setWeatherState("wi-day-cloudy");
                    break;

                case "Haze":
                    setWeatherState("wi-day-haze");
                    break;

                case "Clear":
                    setWeatherState("wi-day-sunny");
                    break;

                case "Rain":
                    setWeatherState("wi-rain");
                    break;

                default:
                    setWeatherState("wi-day-sunny");
                    break;
            }

        }

    }, [weathermood]); // jab weathermood change hoga tabhi


    //converting sunset seconds into time
    let sec = sunset;
    let date = new Date(sec * 1000); //conveting into millisec
    let timeStr = `${date.getHours()}:${date.getMinutes()}`;

    return (
        <>
            <article className='widget'>

                <div className="weatherIcon">
                    <i className={`wi ${weatherState}`}></i>
                </div>

                <div className="weatherInfo">
                    <div className="temperature">
                        <span>{temp}&deg;</span>
                    </div>
                    <div className="description">
                        <div className="weatherCondition">{weathermood}</div>
                        <div className="place">{name},{country}</div>
                    </div>
                </div>

                <div className="date">
                    {new Date().toLocaleString()}
                </div>

                {/* our 4  column sections */}
                <div className="extra-temp">
                    <div className="temp-info-minmax">
                        <div className="two-sided-section">
                            <p>
                                <i className='wi wi-sunset'></i>
                            </p>
                            <p className="extra-info-leftside">
                                {timeStr}
                                <br />
                                Sunset
                            </p>
                        </div>
                        <div className="two-sided-section">
                            <p>
                                <i className='wi wi-humidity'></i>
                            </p>
                            <p className="extra-info-leftside">
                                {humidity}
                                <br />
                                Humidity
                            </p>
                        </div>

                    </div>

                    <div className="weather-extra-info">
                        <div className="two-sided-section">
                            <p>
                                <i className='wi wi-rain'></i>
                            </p>
                            <p className="extra-info-leftside">
                                {pressure}
                                <br />
                                Pressure
                            </p>
                        </div>
                        <div className="two-sided-section">
                            <p>
                                <i className='wi wi-strong-wind'></i>
                            </p>
                            <p className="extra-info-leftside">
                                {speed}
                                <br />
                                Speed
                            </p>
                        </div>
                    </div>

                </div>
            </article>
        </>
    )
}

export default Weathercard