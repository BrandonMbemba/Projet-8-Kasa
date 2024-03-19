import React from "react";
import Header from "./Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Logement from "../pages/Logement";
import Footer from "./Footer";
import Error404 from "../pages/Error404";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/logement/:id" element={<Logement />} />
        <Route path="*" element={<Error404 />} />
        <Route path="/Error404" element={<Error404 />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
};

export default App;