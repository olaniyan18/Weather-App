/** @format */

import React, { useEffect } from "react";
import styles from "./third.module.css";
import sunny from "../../assets/images/icon-sunny.webp";
import loadingImage from "../../assets/images/icon-loading.svg";
import axios from "axios";
export default function Third({ weather, loading, result }) {
  const list = [
    { label: "Feels Like", deg: "18°" },
    { label: "Humidity", deg: "46%" },
    {
      label: "Wind",
      deg: weather?.current_weather?.windspeed || [],
      unit: weather?.current_weather_units?.windspeed || [],
    },
    { label: "Precipitation", deg: "0 mm" },
  ];

  (useEffect(() => {
    if (!weather?.latitude || !weather?.longitude) return;

    axios
      .get(
        `https://geocoding-api.open-meteo.com/v1/reverse?latitude=6.5&longitude=3.375
`,
      )
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  }),
    []);

  function formatDate(dateString) {
    const date = new Date(dateString);

    const options = {
      year: "numeric",
      month: "short",
      day: "numeric",
      weekday: "short",
    };

    return date.toLocaleString("en-US", options);
  }

  return (
    <div className={styles.third}>
      {loading ? (
        <div className={styles.loading}>
          <img src={loadingImage} alt='' />
          <span>Loading...</span>
        </div>
      ) : (
        <div className={styles.container1}>
          <div>
            <span>
              {result[0].name}, {result[0].country}
            </span>
            <p> {formatDate(weather?.current_weather?.time)}</p>
          </div>
          <span>
            <img src={sunny} alt='' />
            {weather?.current_weather?.temperature}°
          </span>
        </div>
      )}

      <div className={styles.container2}>
        {list.map((data, index) => (
          <div key={index}>
            <span>{data.label}</span>
            {loading ? (
              "__"
            ) : (
              <p>
                {data.deg} {data.unit}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
