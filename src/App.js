import React from "react";
import "./App.css";
import Header from "./components/Header";
import Buttons from "./components/Buttons";
import Navbar from "./components/Navbar";
import Vdeos from "./components/Videos";
import BottomNav from "./components/BottomNav";

function App() {
  return (
    <div className="app">
      <Header />
      <Buttons />
      <Navbar />
      <Vdeos />
      <BottomNav />
    </div>
  );
}

export default App;
