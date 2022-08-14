// https://api.openweathermap.org/data/2.5/weather?q=Delhi&appid=7e0dfe6ff5c8d7361c8bd7ab1d362e20

import React, { useState, useEffect } from 'react';
import Weathercard from './weathercard';
import "./style.css";

const Temp = () => {

    const [searchValue, setSearchValue] = useState("Delhi");
    const [tempInfo, setTempInfo] = useState({});

    const getWeatherInfo = async () => {
        try {
            let url =  `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=7e0dfe6ff5c8d7361c8bd7ab1d362e20`;
            
            const res= await fetch(url); 
            const data = await res.json();

            const {temp, humidity, pressure} = data.main;
            const { main: weathermood} = data.weather[0];
            const {name} = data;
            const {speed}= data.wind;
            const {country, sunset} = data.sys;
            
            const myNewWeatherInfo = {
                temp,
                humidity,
                pressure,
                weathermood,
                name,
                speed,
                country,
                sunset,
            };

            setTempInfo(myNewWeatherInfo);

        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {   //jab page refresh kare to koi function automatically call ho jaye
        getWeatherInfo();
    }, []);

    return (
        <>
            <div className="wrap">
                <div className="search">
                    <input type="search"
                        placeholder='Search....'
                        autoFocus
                        id="search"
                        className='searchTerm'
                        value={searchValue}
                        onChange={(e) => setSearchValue(e.target.value)}
                    />

                    <button className='searchButton' type='button' onClick={getWeatherInfo}>
                        Search
                    </button>

                </div>
            </div>

            {/* our temp card */}

            
            <Weathercard tempInfo={tempInfo} />  
            {/* passing tempInfo as props */}

        </>
    )
}

export default Temp