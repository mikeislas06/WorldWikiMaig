import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

const SingleCountryWeather = () => {

    const [data, setData] = useState({});

    const { capital } = useParams();

    const fetchApi = async () => {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURI(capital)}&appid=efc0fbc9e7cb1478a579399c4e04c9e9`;

        const response = await fetch(url);
        const result = await response.json();

        setData({
            name: result.name,
            main: result.weather[0].main,
            temp: result.main.temp,
            icon: result.weather[0].icon
        });
    };

    useEffect(() => {
        fetchApi();
    },[])

    return (
        <div className="weather-card">
            <h1>{ data.name }</h1>
            <div style={{display:"flex", justifyContent:"space-between"}}>
                <p>{ data.main }</p>
                <p>{ data.temp }°F</p>
                <p>{ data.icon }</p>
            </div>
            <div style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
                <Link to="/">Home</Link>
            </div>
        </div>
    );
};

export default SingleCountryWeather;