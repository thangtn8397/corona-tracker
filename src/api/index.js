import axios from "axios";

const url = "https://covid19.mathdro.id/api";

export const fetchData = async () => {
  const res = await axios.get(`${url}`);
  return res.data;
};

export const fetchDailyData = async () => {
  const res = await axios.get("https://api.covidtracking.com/v1/us/daily.json");
  return res.data;
};

export const fetchCountries = async () => {
  const res = await axios.get("https://covid19.mathdro.id/api/countries/");
  return res.data.countries;
};

export const fetchCountryDetail = async (country) => {
  const res = await axios.get(
    `https://covid19.mathdro.id/api/countries/${country}`
  );
  return res.data;
};
