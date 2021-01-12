import React, { useEffect, useState } from "react";
import Charts from "./components/Charts";
import Cards from "./components/Cards";
import CountryPicker from "./components/CountryPicker";
import styles from "./App.module.css";
import { fetchData } from "./api";

import "./styles/style.scss";

function App() {
  const [data, setData] = useState({});
  useEffect(() => {
    const runEffect = async () => {
      let data = await fetchData();
      setData(data);
    };
    runEffect();
  }, []);
  return (
    <div className={styles.App}>
      Covid 19
      <Cards data={data} />
      <Charts />
      <CountryPicker />
    </div>
  );
}

export default App;
