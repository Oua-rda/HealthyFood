import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./component/Navbar";
import Hero from "./component/Hero";
import Cards from "./component/Cards";
import Menu from "./component/Menu";
import Services from "./component/Services";
import Contact from "./component/Contact";
import SignIn from "./component/Signin";  
import SignUp from "./component/Signup"    


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Cards />
              <Services />
              <Contact />
            </>
          }
        />
        <Route path="/menu" element={<Menu />} />
        <Route path="/signin" element={<SignIn />} /> 
                  <Route path="/signup" element={<SignUp />} /> 

      </Routes>
    </Router>
  );
}

export default App;
