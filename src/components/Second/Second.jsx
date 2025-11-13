/** @format */

import React, { useState } from "react";
import styles from "./second.module.css";
import search from "../../assets/images/icon-search.svg";

export default function Second() {
  const [place, setPlace] = useState("");

  function Search() {
    alert(`hello,${place}`);
    setPlace("");
  }
  const [dropdown, setDropdown] = useState(false);

  const options = ["Lagos", "Osun", "Ekiti", "Abuja", "Kano"];

  function handleSelect(option) {
    setPlace(option);
    setDropdown(false);
  }
  return (
    <div className={styles.second}>
      <h3>How's the sky looking today?</h3>

      <div className={styles.div}>
        <div>
          <img src={search} alt='' />

          <input
            type='search'
            name='place'
            value={place}
            onChange={(e) => {
              setPlace(e.target.value);
              setDropdown(e.target.value.length > 0);
            }}
            placeholder='Search for a place...'
            id=''
          />

          {dropdown && (
            <div className={styles.option}>
              {options
                .filter((option) =>
                  option.toLowerCase().includes(place.toLowerCase())
                )
                .map((data, index) => (
                  <span key={index} onClick={() => handleSelect(data)}>
                    {data}
                  </span>
                ))}
            </div>
          )}
        </div>

        <button type='button' onClick={Search}>
          Search
        </button>
      </div>
    </div>
  );
}
