import React from "react";
import Education from "./components/Education";
import Students from "./components/Students";
import Library from "./components/Library";
import Services from "./components/Services";
import History from "./components/History";
import Location from "./components/Location";
import FooterSection from "./components/FooterSection";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <>
      <Education />
      <Students />
      <Library />
      <Services />
      <History />
      <Location />
      <FooterSection />
    </>
  );
};

export default App;
