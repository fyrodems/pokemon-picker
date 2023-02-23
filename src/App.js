import "./index.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/common/Header";
import HomePage from "./components/pages/HomePage";
import CardPage from "./components/pages/CardPage";
import SeriesPage from "./components/pages/SeriesPage";
import SetsPage from "./components/pages/SetsPage";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/:id" element={<CardPage />} />
        <Route exact path="/series" element={<SeriesPage />} />
        <Route exact path="/sets" element={<SetsPage />} />
        {/* <Route exact path="/cards" element={<CardPage/>} /> */}
      </Routes>
    </Router>
  );
};

export default App;
