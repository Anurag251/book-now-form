import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import BookNowProvider from "./context/book-now/book-now-context";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <BookNowProvider>
        <App />
      </BookNowProvider>
    </BrowserRouter>
  </React.StrictMode>
);
