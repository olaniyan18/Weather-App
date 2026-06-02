/** @format */

import React, { useState } from "react";
import First from "./First/First";
import Second from "./Second/Second";
import Third from "./Third/Third";
import Fourth from "./Fourth/Fourth";
import Fifth from "./Fifth/Fifth";
import styles from "./weather.module.css";
import axios from "axios";
import Error from "./Error";

export default function Weather() {
  const [weather, setWeather] = useState(null);
  const [place, setPlace] = useState("");
  const [err, setErr] = useState(false);
  const [noCity, setNoCity] = useState(false);
  const [loading, setLoading] = useState(true);
  const [isClick, setIsClick] = useState(false);

  // const [longitude, setLongitude] = useState("");
  // const [latitude, setLatitude] = useState("");
  const [result, setResult] = useState([]);

  function cleanPlaceName(name) {
    return name.replace(/\b(state|city|province)\b/gi, "").trim();
  }

  function Search() {
    const cleanname = cleanPlaceName(place);
    if (cleanname.length === 0) {
      alert("please add a city");

      return;
    }

    setLoading(true);
    setIsClick(true);
    setNoCity(false);
    setErr(false);

    axios
      .get(
        `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(
          cleanname,
        )}&count=1`,
      )
      .then((res) => {
        const results = res.data.results;
        if (results && results.length > 0) {
          setResult(results);
          console.log(results);

          const latitude = results[0].latitude;
          const longitude = results[0].longitude;
          const timezone = results[0].timezone;

          const params = {
            latitude,
            longitude,
            hourly: "temperature_2m,precipitation",
            daily: "weathercode,temperature_2m_max,temperature_2m_min",
            current_weather: true,
            timezone,
          };

          // Fetch weather
          axios
            .get("https://api.open-meteo.com/v1/forecast", { params })
            .then((res) => {
              console.log(`Weather data for :${timezone}`, res.data);
              setWeather(res.data);
              setPlace("");
              setLoading(false);
              setIsClick(false);
              setNoCity(false);
            })
            .catch((err) => console.error("Weather fetch error:", err));
        } else {
          console.log("No coordinates found for:", place);
          setNoCity(true);
          setIsClick(false);
        }
      })
      .catch((err) => {
        console.error("Geocoding error:", err);
        setIsClick(false);
        setTimeout(() => {
          setErr(true);
        }, 900);
      })
      .finally(() => {
        setIsClick(false);
        setLoading(false);
      });
  }

  return (
    <div>
      <First />
      {err ? (
        <Error />
      ) : (
        <>
          <Second
            place={place}
            setPlace={setPlace}
            Search={Search}
            loading={isClick}
          />
          {noCity ? (
            <span className={styles.result}>No search result found!</span>
          ) : (
            <div className={styles.weather}>
              <div>
                <Third weather={weather} loading={loading} result={result} />
                <Fourth weather={weather} loading={loading} />
              </div>
              <Fifth weather={weather} loading={loading} />
            </div>
          )}
        </>
      )}
    </div>
  );
}
