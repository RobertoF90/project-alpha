import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

import Hero from "./components/Hero";
import Features from "./components/Features";
import Cta from "./components/Cta";
import Form from "./components/Form";

function App() {
  return (
    <div className="App">
      <Hero />
      <Features />
      <Cta />
      {/* <Form /> */}
    </div>
  );
}

export default App;
