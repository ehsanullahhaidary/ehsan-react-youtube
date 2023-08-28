import React from "react";
import "./App.css";
import Header from "./components/Header";
import Buttons from "./components/Buttons";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="app">
      <Header />
      <Buttons />
      <Navbar />
    </div>
  );
}

export default App;
