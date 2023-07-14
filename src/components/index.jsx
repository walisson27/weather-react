import "../css/style.css"
const Weather = () => {
    return(
        <body>
            <div className="container">
                <div className="form">
                    <h3>O clima de uma cidade:</h3>
                    <div className="form-input-container">
                        <input 
                          type="text" 
                          placeholder="Digite o nome da cidade"
                          id="city-input"
                          />
                          <button id="search">
                            <i className="fa-solid fa-magnifying-glass"></i>
                          </button>
                    </div>
                </div>
                <div id="weather-data">
                  <h2>
                    <i className="fa-solid fa-location-dot"></i>
                    <span id="city">Maceió</span>
                    <img src="https://www.countryflagicons.com/SHINY/64/BR.png" alt="Bandeira do pais" id="country" />
                  </h2>
                  <p id="temperature"><span>38</span>&deg;C</p>
                  <div id="description-container">
                    <p id="description">Nublado</p>
                    <img src="http://openweathermap.org/img/wn/01d.png" alt="condições do tempo" id="weather-icon"/>
                  </div>
                  <div id="details-container">
                    <p id="umidity">
                        <i className="fa-solid fa-droplet"></i>
                        <span>48%</span>
                    </p>
                    <p id="wind">
                        <i className="fa-solid fa-wind"></i>
                        <span>3km/h</span>
                    </p>
                  </div>
                </div>
            </div>
        </body>
    )
} 

export default Weather;