import axios from "axios";

export const apis = axios.create({
  baseURL: "https://stnepal.com.np/sherpatech/api/v1",
});

// export const apis = axios.create({
//   baseURL: "https://admin.book4clean.com/api/v1",
// });
