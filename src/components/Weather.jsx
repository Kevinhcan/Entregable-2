import React, { useState } from "react";

const Weather = ({ weather, temp }) => {
  const [IsCelcius, setIsCelcius] = useState(true);

  const changeUnitTemp = () => {
    setIsCelcius(!IsCelcius);
  };

  return (
    <section className="text-xl">
      <h2 className="text-center mb-4 font-bold text-2xl">
        {weather.name}, {weather.sys.country}
      </h2>

      <section className="grid gap-4 sm:grid-cols-two">
        <article className="bg-slate-300/70 rounded-3xl grid grid-cols-2 justify-items-center items-center py-2 sm:px-2">
          <h3 className="capitalize col-start-1 col-end-3"> {weather.weather[0].description}</h3>

          <h2 className="text-5xl sm:text-6xl">{IsCelcius ? `${temp.celcius} °C` : `${temp.fahrenheit}°F`}</h2>

          <div>
            <img
              src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@4x.png`}
              alt=""
            />
          </div>
        </article>

        <article className="bg-slate-300/70 rounded-3xl grid grid-cols-3 justify-center justify-items-stretch py-4 sm:grid-cols-1 sm:px-2 py-0">
          <div className="flex text-sm justify-center items-center">
            <div>
              <img src="/images/wind.png" alt="" />
            </div>
            <h5>{weather.wind.speed}m/s</h5>
          </div>
          <div className="flex text-sm justify-center items-center">
            <div>
              <img src="/images/humidity.png" alt="" />
            </div>
            <h5>{weather.main.humidity}%</h5>
          </div>
          <div className="flex text-sm justify-center items-center">
            <div>
              <img src="/images/pressure.png" alt="" />
            </div>
            <h5>{weather.main.pressure}hPa</h5>
          </div>
        </article>
      </section>
      <button
        onClick={changeUnitTemp}
        className="bg-blue-500 py-2 px-6 text-white font-bold rounded-full hover:bg-blue-800 duration-200 text-sm block mx-auto mt-4"
      >
        Change °C/°F
      </button>
    </section>
  );
};

export default Weather;
