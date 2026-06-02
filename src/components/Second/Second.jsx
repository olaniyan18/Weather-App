/** @format */

import React, { useState, useRef, useEffect } from "react";
import styles from "./second.module.css";
import search from "../../assets/images/icon-search.svg";
import axios from "axios";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

export default function Second({ place, setPlace, Search, loading }) {
  const [dropdown, setDropdown] = useState(false);
  const inputRef = useRef(null);

  const [saveCountry, setSaveCountry] = useState([]);

  //   const options = ["Lagos", "Osun", "Ekiti", "Abuja", "Kano"];

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (inputRef.current && !inputRef.current.contains(event.target)) {
        setDropdown(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    axios
      .get("https://countriesnow.space/api/v0.1/countries/states")
      .then((res) => {
        // console.log(res.data);
        setSaveCountry(res.data.data);
      });
  }, []);

  const country = saveCountry.flatMap((country) =>
    country.states.map((s) => `${s.name}, ${country.name}`),
  );

  function handleSelect(option) {
    setPlace(option);
    setDropdown(false);
  }
  return (
    <div className={styles.second}>
      <h3>How's the sky looking today?</h3>

      <div className={styles.div}>
        <div ref={inputRef}>
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
              {country
                .filter((option) =>
                  option.toLowerCase().includes(place.toLowerCase()),
                )
                .map((data, index) => (
                  <span key={index} onClick={() => handleSelect(data)}>
                    {data}
                  </span>
                ))}
            </div>
          )}
        </div>

        {loading ? (
          <Box sx={{ display: "flex" }}>
            <CircularProgress size={20} sx={{ color: "white" }} />
          </Box>
        ) : (
          <button type='button' onClick={Search}>
            Search
          </button>
        )}
      </div>
    </div>
  );
}
