import React from "react";
import "./App.css";
import Header from "./components/Header";
import Buttons from "./components/Buttons";
import Navbar from "./components/Navbar";
import Videos from "./components/Videos";
import BottomNav from "./components/BottomNav";
import { Routes, Route } from "react-router-dom";
import Search from "./components/Search";

function App() {
  return (
    <div className="app">
      <Header />
      <Navbar />
      <BottomNav />
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <Buttons />
              <Videos />
            </div>
          }
        />
        <Route path="/search" element={<Search />} />
      </Routes>
      {/* <Header />
      <Buttons />
      <Navbar />
      <Videos />
      <BottomNav /> */}
    </div>
  );
}

export default App;
