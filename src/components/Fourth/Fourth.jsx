/** @format */

import React from "react";
import styles from "./fourth.module.css";
import img from "../../assets/images/icon-rain.webp";
import storm from "../../assets/images/icon-storm.webp";
import sunny from "../../assets/images/icon-sunny.webp";
import snow from "../../assets/images/icon-snow.webp";
import fog from "../../assets/images/icon-fog.webp";
import cloud from "../../assets/images/icon-partly-cloudy.webp";
import drizzle from "../../assets/images/icon-drizzle.webp";
export default function Fourth() {
  const list = [
    { day: "Tue", img: img, deg1: "20°", deg2: "14°" },
    { day: "Wed", img: drizzle, deg1: "20°", deg2: "14°" },
    { day: "Thu", img: sunny, deg1: "20°", deg2: "14°" },
    { day: "Fri", img: cloud, deg1: "20°", deg2: "14°" },
    { day: "Sat", img: storm, deg1: "20°", deg2: "14°" },
    { day: "Sun", img: snow, deg1: "20°", deg2: "14°" },
    { day: "Mon", img: fog, deg1: "20°", deg2: "14°" },
  ];
  return (
    <div className={styles.fourth}>
      <span htmlFor=''>Daily forecast</span>

      <div className={styles.container1}>
        {list.map((data, index) => (
          <div className={styles.container2} key={index}>
            <span>{data.day}</span>
            <img src={data.img} alt='' />
            <div>
              <span>{data.deg1}</span>
              <p>{data.deg2}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
