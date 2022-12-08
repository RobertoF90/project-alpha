import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

import Hero from "./components/Hero";
import Features from "./components/Features";
import Cta from "./components/Cta";
import Form from "./components/Form";
import Content from "./components/Content";
import ContentTwo from "./components/Content-two";

function App() {
  return (
    <div className="App">
      <Hero />
      <Content />
      <Features />
      <Cta />
      <ContentTwo />
      <Form />
    </div>
  );
}

export default App;
