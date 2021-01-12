import axios from "axios";

export const fetchData = async () => {
  console.log("fetch");
  const res = await axios.get("https://covid19.mathdro.id/api");
  console.log(res.data);
  return res.data;
};
