import axios from "axios";

export const apis = axios.create({
  baseURL: "https://stnepal.com.np/sherpatech/api/v1",
});
