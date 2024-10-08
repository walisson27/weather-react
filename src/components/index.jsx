import { useState } from 'react';
import axios from 'axios';
import "../css/style.css"

const Weather = () => {
    const [data, setData] = useState({});
    const [location, setLocation] = useState('');

    const apiKey = import.meta.env.VITE_WEATHER_API_KEY;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${apiKey}&lang=pt_br`;
    
    const searchLocation = (event) => {
        if (event.key === 'Enter') {
            axios.get(url).then((response) => {
                setData(response.data);
                console.log(response.data);
            });
            setLocation('');
        }
    };

    const getWeatherClass = () => {
        if (!data.weather || !data.dt || !data.timezone) return '';

        const mainWeather = data.weather[0].main.toLowerCase();
        const localTime = new Date((data.dt + data.timezone) * 1000);
        const hours = localTime.getUTCHours();

        const isDay = hours >= 6 && hours < 18;

        let weatherClass = '';
        if (mainWeather.includes('cloud')) {
            weatherClass = 'cloudy';
        } else if (mainWeather.includes('rain')) {
            weatherClass = 'rainy';
        } else if (mainWeather.includes('clear')) {
            weatherClass = 'sunny';
        }

        return `${weatherClass}-${isDay ? 'day' : 'night'}`;
    };

    return (
        <div className={`app ${getWeatherClass()}`}>
            <div className='search'>
                <input 
                    value={location}
                    onChange={event => setLocation(event.target.value)}
                    onKeyPress={searchLocation}
                    placeholder='Pesquisa Cidade'
                    type='text'
                />
            </div>
            <div className='container'>
                <div className='top'>
                    <div className='location'>
                        <p>{data.name}</p>
                    </div>
                    <div className='temp'>
                        {data.main ? <h1>{data.main.temp.toFixed()}°C</h1> : null}
                    </div>
                    <div className='description'>
                        {data.weather ? <p>{data.weather[0].main}</p> : null}
                    </div>
                </div>

                {data.name !== undefined &&
                    <div className='bottom'>
                        <div className='feels'>
                            {data.main ? <p className='bold'>{data.main.feels_like.toFixed()}°C</p> : null}
                            <p>Sensação Térmica</p>
                        </div>
                        <div className='humidity'>
                            {data.main ? <p className='bold'>{data.main.humidity}%</p> : null}
                            <p>Umidade</p>
                        </div>
                        <div className='wind'>
                            {data.wind ? <p className='bold'>{data.wind.speed.toFixed()}KM</p> : null}
                            <p>Velocidade do Vento</p>
                        </div>
                    </div>
                }
            </div>
        </div>
    );
};

export default Weather;
