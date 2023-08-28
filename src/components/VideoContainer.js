import React from "react";
import "./VideoContainer.css";

function VideoContainer() {
  return (
    <div className="videos-container__video-container">
      <iframe
        className="videos-container__video-container--iframe"
        width="560"
        height="315"
        src="https://www.youtube.com/embed/hkP-g9EcYbo"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
      <div className="videos-container__video-container--middle-div">
        <img
          src="https://yt3.ggpht.com/EpunmP_QxObRT33gHSmoZppAf0UniOg5CiQPtxw6LGMfY13Bic_6WfT9xEzHtmODB3IbmRIS=s48-c-k-c0x00ffffff-no-rj"
          alt="BelievingBeings"
        />
        <p>
          Does God Exist? - Dr Zakir Naik in Qatar | Full Lecture + Q&A Session
        </p>
        <div className="videos-container__video-container--middle-div--icon">
          <svg
            viewBox="0 0 24 24"
            preserveAspectRatio="xMidYMid meet"
            focusable="false"
            className="style-scope yt-icon"
            style={{ width: "100%", height: "100%" }}
          >
            <g className="style-scope yt-icon">
              <path
                d="M12,16.5c0.83,0,1.5,0.67,1.5,1.5s-0.67,1.5-1.5,1.5s-1.5-0.67-1.5-1.5S11.17,16.5,12,16.5z M10.5,12 c0,0.83,0.67,1.5,1.5,1.5s1.5-0.67,1.5-1.5s-0.67-1.5-1.5-1.5S10.5,11.17,10.5,12z M10.5,6c0,0.83,0.67,1.5,1.5,1.5 s1.5-0.67,1.5-1.5S12.83,4.5,12,4.5S10.5,5.17,10.5,6z"
                className="style-scope yt-icon"
              ></path>
            </g>
          </svg>
        </div>
      </div>
      <div className="videos-container__video-container--bottom-div">
        <div className="videos-container__video-container--bottom-div--text-icon">
          <p>BelievingBeings</p>
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
            <g className="style-scope yt-icon">
              <path
                d="M12,2C6.5,2,2,6.5,2,12c0,5.5,4.5,10,10,10s10-4.5,10-10C22,6.5,17.5,2,12,2z M9.8,17.3l-4.2-4.1L7,11.8l2.8,2.7L17,7.4 l1.4,1.4L9.8,17.3z"
                className="style-scope yt-icon"
              ></path>
            </g>
          </svg>
        </div>
        <p>871K views . 1 month ago</p>
      </div>
    </div>
  );
}

export default VideoContainer;
