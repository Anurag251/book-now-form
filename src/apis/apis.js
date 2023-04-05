import axios from 'axios';
// import { useState } from 'react';

function createAPI() {
  // const [token, setToken] = useState(sessionStorage.getItem("token"));

  const api = axios.create({
    baseURL: "https://admin.book4clean.com/api/v1",
    headers: {
      "content-type": "application/json",
      accept: "application/json",
      Authorization: `Bearer ${sessionStorage.getItem("token")}`,
    },
  });

  return api;
}

export const apis = createAPI();

// export const apis = axios.create({
//   baseURL: "https://admin.book4clean.com/api/v1",
// });
