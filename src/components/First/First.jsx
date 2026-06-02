/** @format */

import React, { useEffect, useRef, useState } from "react";
import styles from "./first.module.css";
import logo from "../../assets/images/logo.svg";
import settings from "../../assets/images/icon-units.svg";
import arrow from "../../assets/images/icon-dropdown.svg";
import check from "../../assets/images/icon-checkmark.svg";

export default function First() {
  const [list, setList] = useState(false);
  const [active, setActive] = useState("C");
  const [activeWind, setActiveWind] = useState("K");

  const [activePrep, setActivePrep] = useState("MM");
  const listRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (listRef.current && !listRef.current.contains(event.target)) {
        setList(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  function handleDropdown() {
    setList((prev) => !prev);
  }
  return (
    <div className={styles.first}>
      <img src={logo} alt='' />
      <div className={styles.unit} ref={listRef}>
        <div onClick={handleDropdown} className={styles.unit2}>
          <img src={settings} alt='' />
          <span>Units</span>
          <img src={arrow} alt='' />
        </div>

        {list && (
          <div className={styles.list}>
            <span>Switch to {active === "C" ? "Imperial" : "Metric"} </span>
            <div className={styles.temp}>
              <span>Temperature</span>
              <div>
                <span
                  className={active === "C" ? styles.active : styles.notactive}
                  onClick={() => setActive("C")}
                >
                  {" "}
                  Celsius (°C)
                  {active === "C" && <img src={check} alt='' />}
                </span>
                <span
                  className={active === "F" ? styles.active : styles.notactive}
                  onClick={() => setActive("F")}
                >
                  {" "}
                  Fahrenheit (°F)
                  {active === "F" && <img src={check} alt='' />}
                </span>
              </div>
            </div>

            <div className={styles.temp}>
              <span>Wind Speed</span>
              <div>
                <span
                  className={
                    activeWind === "K" ? styles.active : styles.notactive
                  }
                  onClick={() => setActiveWind("K")}
                >
                  {" "}
                  km/h {activeWind === "K" && <img src={check} alt='' />}
                </span>
                <span
                  className={
                    activeWind === "M" ? styles.active : styles.notactive
                  }
                  onClick={() => setActiveWind("M")}
                >
                  {" "}
                  mph {activeWind === "M" && <img src={check} alt='' />}
                </span>
              </div>
            </div>

            <div className={styles.temp}>
              <span>Precipitation</span>
              <div>
                <span
                  className={
                    activePrep === "MM" ? styles.active : styles.notactive
                  }
                  onClick={() => setActivePrep("MM")}
                >
                  {" "}
                  Millimeters(mm)
                  {activePrep === "MM" && <img src={check} alt='' />}
                </span>
                <span
                  className={
                    activePrep === "I" ? styles.active : styles.notactive
                  }
                  onClick={() => setActivePrep("I")}
                >
                  {" "}
                  Inches(in)
                  {activePrep === "I" && <img src={check} alt='' />}
                </span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
