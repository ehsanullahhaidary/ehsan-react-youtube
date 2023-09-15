import React, { useState } from "react";
import "./Buttons.css";

const keyWords = [
  "All",
  "Comedy",
  "JavaScript",
  "Dawah",
  "Cars",
  "Sales",
  "Tourist destinations",
  "Python",
  "Live",
  "Blockchain",
  "Computers",
  "Recently uploaded",
  "Database",
  "Gadgets",
  "Gamming",
  "New to you",
];
function Buttons() {
  const [activeButton, setActiveButton] = useState("All");

  const clickHandler = (value) => {
    setActiveButton(value);
  };

  return (
    <div className="second-fixed">
      {/* <!-- Recommendation buttons div at bottom of header --> */}
      <div className="button-section">
        <div className="button-section__buttons-div">
          {keyWords.map((value, i) => (
            <button
              className={
                activeButton === value
                  ? "activeButton"
                  : "button-section__buttons-div--button "
              }
              key={i}
              onClick={() => clickHandler(value)}
            >
              {value}
            </button>
          ))}
          {/* 
          <button className="button-section__buttons-div--button">All</button>
          <button className="button-section__buttons-div--button">
            Comedy
          </button>
          <button className="button-section__buttons-div--button">
            JavaScript
          </button>
          <button className="button-section__buttons-div--button">Dawah</button>
          <button className="button-section__buttons-div--button">Cars</button>
          <button className="button-section__buttons-div--button">Sales</button>
          <button className="button-section__buttons-div--button">
            Tourist destinations
          </button>
          <button className="button-section__buttons-div--button">Sport</button>
          <button className="button-section__buttons-div--button">
            Python
          </button>
          <button className="button-section__buttons-div--button">Live</button>
          <button className="button-section__buttons-div--button">
            Blockchain
          </button>
          <button className="button-section__buttons-div--button">
            Computers
          </button>
          <button className="button-section__buttons-div--button">
            Recently uploaded
          </button>
          <button className="button-section__buttons-div--button">
            Database
          </button>
          <button className="button-section__buttons-div--button">
            Gadgets
          </button>
          <button className="button-section__buttons-div--button">
            Gamming
          </button>
          <button className="button-section__buttons-div--button">
            New to you
          </button> */}
        </div>
        <div className="button-section__fade-scroll">
          <div className="button-section__fade-scroll-icon">
            <svg
              viewBox="0 0 24 24"
              preserveAspectRatio="xMidYMid meet"
              focusable="false"
              className="style-scope yt-icon"
              style={{
                pointerEvents: "none",
                display: "block",
                width: "100%",
                height: "100%",
              }}
            >
              <g mirror-in-rtl="" className="style-scope yt-icon">
                <path
                  d="M9.4,18.4l-0.7-0.7l5.6-5.6L8.6,6.4l0.7-0.7l6.4,6.4L9.4,18.4z"
                  className="style-scope yt-icon"
                ></path>
              </g>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Buttons;
