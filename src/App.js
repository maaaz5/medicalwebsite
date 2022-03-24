import React from "react";
import styled from "styled-components";
import Main from "./components/sections/main";
import Experts from "./components/sections/Experts";
import Department from "./components/sections/Department";
import LeadingMedcine from "./components/sections/LeadingMedcine";
import Team from "./components/sections/Team";
import Footer from "./components/sections/Footer";
import ContactUs from "./components/sections/ContactUs";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Main />
      <Experts />
      <Department />
      <LeadingMedcine />
      <Team />
      <Footer />
      <ContactUs />
    </div>
  );
}

export default App;
