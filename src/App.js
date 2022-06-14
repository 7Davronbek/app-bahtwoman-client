// rafce

import React from "react";
import Navbar from "./componets/Navbar";
import Footer from "./componets/Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import Catalog from "./pages/Catalog";
import We from "./pages/We";
import Courses from "./pages/Courses";
import Theme from "./pages/Theme";
import Contacts from "./pages/Contacts";
import Social from "./componets/Social";

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Social />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/we" element={<We />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/theme" element={<Theme />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
};

export default App;
