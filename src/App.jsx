import { useEffect } from "react";
import "./App.css";
import { useState } from "react";
import axios from "axios";
import Weather from "./components/Weather";
import Loader from "./components/Loader";

function App() {
  const [coords, setCoords] = useState();
  const [weather, setweather] = useState();
  const [temp, setTemp] = useState()

  const succes = (pos) => {
    const currentCoords = {
      lat: pos.coords.latitude,
      lon: pos.coords.longitude,
    };
    setCoords(currentCoords);
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(succes);
  }, []);

  useEffect(() => {
    if (coords) {
      const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${coords.lat}&lon=${coords.lon}&appid=bb2b02149447d6c02340af01688a8daa`;

      axios
        .get(URL)
        .then((res) => {
          setweather(res.data)
          const celcius = (res.data.main.temp - 273.15).toFixed(1)
          const fahrenheit = (celcius * (9/5)+32).toFixed(1)
          const newTemps = {
            celcius,
            fahrenheit            
          }
          setTemp(newTemps)
        })
        .catch((err) => console.log(err));
    }
  }, [coords]);

  return (
    <div className="App grid place-content-center min-h-screen bg-[url('/images/bg.jpg')] bg-cover px-2">

      {
        weather? (
        <Weather weather={weather} temp={temp} />
        ):(<Loader />)
      }

      
    </div>
  );
}

export default App;
