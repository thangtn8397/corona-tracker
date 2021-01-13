import React, { useEffect, useState } from "react";
import { fetchDailyData } from "../api";
import { Line, Bar } from "react-chartjs-2";
import Spinner from "./UI/Spinner";

const Charts = ({ data: { confirmed, recovered, deaths }, country }) => {
  const [dailyData, setDailyData] = useState([{}]);
  useEffect(() => {
    const fetchData = async () => {
      setDailyData(await fetchDailyData());
    };
    fetchData();
  }, []);

  const barChart = confirmed ? (
    <Bar
      data={{
        labels: ["Infected", "Recovered", "Deaths"],
        datasets: [
          {
            label: "People",
            backgroundColor: [
              "rgba(0, 0, 255, 0.5)",
              "rgba(0, 255, 0, 0.5)",
              "rgba(255, 0, 0, 0.5)",
            ],
            data: [confirmed.value, recovered.value, deaths.value],
          },
        ],
      }}
      options={{
        legend: { display: false },
        title: { display: true, text: `Current state in ${country}` },
      }}
    />
  ) : (
    <Spinner />
  );

  const lineChart = dailyData.length ? (
    <Line
      type="line"
      data={{
        labels: dailyData.map((daily) =>
          new Date(daily.dateChecked).toLocaleDateString()
        ),
        datasets: [
          {
            data: dailyData.map(({ positive }) => positive),
            label: "Infected",
            fill: true,
            borderColor: "purple",
          },
          {
            data: dailyData.map(({ recovered }) => recovered),
            label: "Recovered",
            fill: true,
            borderColor: "green",
          },
          {
            data: dailyData.map(({ death }) => death),
            label: "Death",
            fill: true,
            borderColor: "grey",
          },
        ],
      }}
    />
  ) : (
    <Spinner color="blue" />
  );
  return <div>{!country || country === "global" ? lineChart : barChart}</div>;
};

export default Charts;
