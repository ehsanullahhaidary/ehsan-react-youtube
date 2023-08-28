import React from "react";
import "./App.css";
import Header from "./components/Header";
import Buttons from "./components/Buttons";
import Navbar from "./components/Navbar";
import Vdeos from "./components/Videos";

function App() {
  return (
    <div className="app">
      <Header />
      <Buttons />
      <Navbar />
      <Vdeos />
    </div>
  );
}

export default App;
