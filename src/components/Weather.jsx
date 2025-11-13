/** @format */

import React from "react";
import First from "./First/First";
import Second from "./Second/Second";
import Third from "./Third/Third";
import Fourth from "./Fourth/Fourth";
import Fifth from "./Fifth/Fifth";
import styles from "./weather.module.css";

export default function Weather() {
  return (
    <div>
      {" "}
      <First />
      <Second />
      <div className={styles.weather}>
        <div>
          <Third />
          <Fourth />
        </div>
        <Fifth />
      </div>
    </div>
  );
}
