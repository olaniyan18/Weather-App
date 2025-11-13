/** @format */

import React from "react";
import styles from "./third.module.css";
import sunny from "../../assets/images/icon-sunny.webp";

export default function Third() {
  const list = [
    { label: "Feels Like", deg: "18°" },
    { label: "Humidity", deg: "46%" },
    { label: "Wind", deg: "14 km/h" },
    { label: "Precipitation", deg: "0 mm" },
  ];
  return (
    <div className={styles.third}>
      <div className={styles.container1}>
        <div>
          <span>Berlin, Germany</span>
          <p>Tuesday, Aug 5, 2025</p>
        </div>
        <span>
          <img src={sunny} alt='' />
          20°
        </span>
      </div>

      <div className={styles.container2}>
        {list.map((data, index) => (
          <div key={index}>
            <span>{data.label}</span>
            <p>{data.deg}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
