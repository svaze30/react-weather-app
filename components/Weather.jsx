import { useState } from "react";
import "./weather.css";
import { useEffect } from "react";

const API_KEY = import.meta.env.VITE_API_KEY;
const APIURL = `https://api.openweathermap.org/data/2.5/weather?&appid=${API_KEY}&units=metric`;

const Weather = (props) => {
  const [results, setResults] = useState([]);
  const [city, setCity] = useState("");
  const [temp, setTemp] = useState(0);
  const [humidity, setHumidity] = useState(0);
  const [wind, setWind] = useState(0);

  useEffect(() => {
    async function getData() {
      let URL = `${APIURL}&q=${props.city}`;
      const response = await fetch(URL);
      const data = await response.json();
      setResults(data);
      setCity(data.name);
      setTemp(data.main.temp);
      setHumidity(data.main.humidity);
      setWind(data.wind.speed);
    }

    getData();
    // console.log(props.city);
    // // console.log(URL);
    console.log(results, "results");
  }, [props.city]);

  return (
    <div className="weather">
      <img src="clouds.png" alt="" className="weather-icon" />
      <h1 className="temp">{temp}°C</h1>
      <h2 className="city" key={city}>
        {city}
      </h2>
      <div className="details">
        <div className="col">
          <img src="humidity.png" alt="humidity" />
          <div>
            <p className="humidity">{humidity}%</p>
            <p>Humidity</p>
          </div>
        </div>
        <div className="col">
          <img src="wind.png" alt="wind" />
          <div>
            <p className="humidity">{wind} km/hr</p>
            <p>Wind</p>
            {/* <p>{APIURL}</p> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Weather;
