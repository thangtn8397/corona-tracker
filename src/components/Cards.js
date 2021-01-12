import React from "react";
import CountUp from "react-countup";
import Spinner from "./UI/Spinner";

const Cards = ({ data }) => {
  const confirmed = data.confirmed ? (
    <>
      <CountUp
        className="card__number"
        start={0}
        end={data.confirmed.value}
        duration={2.5}
      />
      <span className="card__date">
        {new Date(data.lastUpdate).toDateString()}
      </span>
      <p className="card__desc">Number of active cases of COVID-19</p>
    </>
  ) : (
    <Spinner color="purple" />
  );
  let recovered = data.recovered ? (
    <>
      <CountUp
        className="card__number"
        start={0}
        end={data.recovered.value}
        duration={2.5}
      />
      <span className="card__date">
        {new Date(data.lastUpdate).toDateString()}
      </span>
      <p className="card__desc">Number of active cases of COVID-19</p>
    </>
  ) : (
    <Spinner color="green" />
  );
  const deaths = data.deaths ? (
    <>
      <CountUp
        className="card__number"
        start={0}
        end={data.deaths.value}
        duration={2.5}
      />
      <span className="card__date">
        {new Date(data.lastUpdate).toDateString()}
      </span>
      <p className="card__desc">Number of active cases of COVID-19</p>
    </>
  ) : (
    <Spinner color="gray" />
  );

  return (
    <div className="card flex container">
      <div className="card__container">
        <div className="card__name" style={{ backgroundColor: "purple" }}>
          Infected
        </div>
        <div className="card__content">{confirmed}</div>
      </div>
      <div className="card__container">
        <div className="card__name" style={{ backgroundColor: "green" }}>
          Recovered
        </div>
        <div className="card__content">{recovered}</div>
      </div>
      <div className="card__container">
        <div className="card__name" style={{ backgroundColor: "gray" }}>
          Deaths
        </div>
        <div className="card__content">{deaths}</div>
      </div>
    </div>
  );
};

export default Cards;
