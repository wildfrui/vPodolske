import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Stories from "./pages/Stories";

import "./css/normalize.css";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/stories" element={<Stories />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
