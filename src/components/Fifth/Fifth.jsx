/** @format */

import React, { useEffect, useRef, useState } from "react";
import styles from "./fifth.module.css";
import arrow from "../../assets/images/icon-dropdown.svg";

import overcast from "../../assets/images/icon-overcast.webp";
import sunny from "../../assets/images/icon-sunny.webp";
import snow from "../../assets/images/icon-snow.webp";
import fog from "../../assets/images/icon-fog.webp";
import cloud from "../../assets/images/icon-partly-cloudy.webp";
export default function Fifth({ loading }) {
  const [selectDay, setSelectDay] = useState("");
  const [dropdown, setDropdown] = useState(false);
  const day = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  const inputRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (inputRef.current && !inputRef.current.contains(event.target)) {
        setDropdown(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const time = [
    { time: "3 pm", img: overcast, deg: "20°" },
    { time: "3 pm", img: cloud, deg: "20°" },
    { time: "3 pm", img: sunny, deg: "20°" },
    { time: "3 pm", img: overcast, deg: "20°" },
    { time: "3 pm", img: snow, deg: "20°" },
    { time: "3 pm", img: fog, deg: "20°" },
    { time: "3 pm", img: snow, deg: "20°" },
    { time: "3 pm", img: overcast, deg: "20°" },
  ];

  function handleDay() {
    setDropdown((prev) => !prev);
  }

  function handleSelectDay(option) {
    setSelectDay(option);
    setDropdown(false);
  }

  return (
    <div className={styles.fifth}>
      <div className={styles.fore} ref={inputRef}>
        <span>Hourly forecast</span>
        <div onClick={handleDay} className={styles.day}>
          <span>{selectDay || "-"}</span>
          <img src={arrow} alt='' />
        </div>
        {!loading && dropdown && (
          <div className={styles.dropdown}>
            {day.map((data, index) => (
              <span
                className={styles.span}
                key={index}
                onClick={() => handleSelectDay(data)}
              >
                {data}
              </span>
            ))}
          </div>
        )}
      </div>
      <div className={styles.container}>
        {" "}
        {time.map((data, index) => (
          <div className={styles.container2}>
            {loading ? (
              <div className={styles.loading}></div>
            ) : (
              <>
                <div key={index}>
                  <img src={data.img} alt='' />
                  <span>{data.time}</span>
                </div>
                <span>{data.deg}</span>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
