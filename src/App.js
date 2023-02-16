import "./index.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./components/pages/HomePage";
import CardPage from "./components/pages/CardPage";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/:id" element={<CardPage />} />
      </Routes>
    </Router>
  );
};

export default App;
