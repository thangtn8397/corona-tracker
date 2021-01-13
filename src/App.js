import React, { useEffect, useState } from "react";
import Charts from "./components/Charts";
import Cards from "./components/Cards";
import CountryPicker from "./components/CountryPicker";
import styles from "./App.module.css";
import { fetchData, fetchCountryDetail } from "./api";

import "./styles/style.scss";

function App() {
  const [data, setData] = useState({});
  const [country, setCountry] = useState("Global");
  useEffect(() => {
    const runEffect = async () => {
      let data = await fetchData();
      setData(data);
    };
    runEffect();
  }, []);

  console.log(country);
  return (
    <div className={styles.App}>
      Covid 19
      <Cards data={data} />
      <CountryPicker
        pickCountry={async (country) => {
          setCountry(country);
          if (country !== "global") {
            setData(await fetchCountryDetail(country));
            console.log(await fetchCountryDetail(country));
          }
        }}
      />
      <Charts country={country} data={data} />
    </div>
  );
}

export default App;
