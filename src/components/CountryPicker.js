import React, { useState, useEffect } from "react";
import { fetchCountries } from "../api/index";

const CountryPicker = ({ pickCountry }) => {
  const [fetchedCountries, setFetchedCountries] = useState([]);

  useEffect(() => {
    const countries = async () => {
      setFetchedCountries(await fetchCountries());
    };
    countries();
  }, []);
  return (
    <div className="country-picker">
      <select
        name="country picker"
        onChange={(e) => pickCountry(e.target.value)}
      >
        <option value="global">Global</option>
        {fetchedCountries.length ? (
          fetchedCountries.map((country) => (
            <option value={country.name}>{country.name}</option>
          ))
        ) : (
          <option value="global">Global</option>
        )}
      </select>
    </div>
  );
};

export default CountryPicker;
