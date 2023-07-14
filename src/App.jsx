import { useState } from 'react';
import axios from 'axios';
import "./css/style.css"
function App() {
  
  //const url = `https://api.openweathermap.org/data/2.5/weather?q=dallas&units=metric&appid=3f65e51fc1f6a58787dba2ba72b64e6f&lang=pt_br`

  return (
    <div className='app'>
      <div className='container'>
        <div className='top'> 
          <div className='location'>
            <p>Dallas</p>
          </div>
          <div className='temp'>
            <h1>60 C</h1>
          </div>
          <div className='description'>
            <p>Clouds</p>
          </div>
        </div>
        <div className='bottom'>
        <div className='feels'>
          <p className='bold'>65 c</p>
          <p>Feels Like</p>
        </div>
        <div className='humidity'>
          <p className='bold'>20%</p>
          <p>Humidity</p>
        </div>
        <div className='wind'>
          <p className='bold'>12 MPH</p>
          <p>Wind Speed</p>
        </div>
        </div>         
      </div>
    </div>
  )
}

export default App
