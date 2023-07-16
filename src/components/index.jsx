import { useState } from 'react';
import axios from 'axios';
import "../css/style.css"

const Weather = () => {
    const [data, setData] = useState({})
    const [location, setLocation] = useState('')
  
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=3f65e51fc1f6a58787dba2ba72b64e6f&lang=pt_br`
  
    const searchLocation = (event) => {
      if(event.key === 'Enter') {
  
        axios.get(url).then((response) =>{
        setData(response.data)
        console.log(response.data)
      })
      setLocation('')
    }
  }
    return (
      <div className='app'>
        <div className='search'>
          <input 
            value={location}
            onChange={event => setLocation(event.target.value)}
            onKeyPress={searchLocation}
            placeholder='Pesquisa'
            type='text'/>
        </div>
        <div className='container'>
          <div className='top'> 
            <div className='location'>
              <p>{data.name}</p>
            </div>
            <div className='temp'>
              {data.main ? <h1>{data.main.temp.toFixed()}°C</h1> :null}
            </div>
            <div className='description'>
              {data.weather ? <p>{data.weather[0].main}</p> : null}
            </div>
          </div>
  
          {data.name != undefined &&
          
          <div className='bottom'>
          <div className='feels'>
             {data.main ? <p className='bold'>{data.main.feels_like.toFixed()}°C</p> : null}
            <p>Sensasão Térmica</p>
          </div>
          <div className='humidity'>
            {data.main ? <p className='bold'>{data.main.humidity}%</p> : null}
            <p>Umidade</p>
          </div>
          <div className='wind'>
            {data.wind ? <p className='bold'>{data.wind.speed.toFixed()}KM</p> : null}
            <p>velocidade do vento</p>
          </div>
          </div>   
          }
        </div>
      </div>
    )
  }
    
export default Weather;