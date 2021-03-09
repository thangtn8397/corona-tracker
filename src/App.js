import React, { useEffect, useState } from "react";
import Charts from "./components/Charts";
import Cards from "./components/Cards";
import CountryPicker from "./components/CountryPicker";
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

  return (
    <div>
      <header>
        <h1>Corona Tracker</h1>
      </header>
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
