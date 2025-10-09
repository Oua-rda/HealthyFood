import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./component/Navbar";
import Hero from "./component/Hero";
import Cards from "./component/Cards";
import Menu from "./component/Menu"; // <-- import Food.jsx

function App() {
  return (
    <Router>
      <Navbar /> {/* Navbar is shown on all pages */}

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Cards />
            </>
          }
        />
        <Route path="/Menu" element={<Menu />} />
      </Routes>
    </Router>
  );
}

export default App;
