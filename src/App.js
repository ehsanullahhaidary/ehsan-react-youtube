import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Buttons from "./components/Buttons";
import Navbar from "./components/Navbar";
import Videos from "./components/Videos";
import BottomNav from "./components/BottomNav";
import { Routes, Route } from "react-router-dom";
import Search from "./components/Search";

function App() {
  const [activeButton, setActiveButton] = useState("All");

  const activeCatagory = () => {
    return activeButton;
  };
  const setActiveCatagory = (value) => {
    return setActiveButton(value);
  };
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
              <Buttons
                setActiveCat={setActiveCatagory}
                activeCat={activeCatagory}
              />
              <Videos />
            </div>
          }
        />
        <Route path="/search/:searchTerm" element={<Search />} />
        {/* <Route element={<Navigate replace to="/" />} /> */}
      </Routes>
    </div>
  );
}

export default App;
