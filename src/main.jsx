import React from "react";
import ReactDOM from "react-dom/client";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import App from "./App.jsx";
import Details from "./pages/Details/index.jsx";
import Home from "./pages/Home/index.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<App />}>
          <Route path="/" element={<Home />} />
          <Route path="movie/:id" element={<Details />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
