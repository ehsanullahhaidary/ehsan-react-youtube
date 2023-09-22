import React, { useEffect, useState } from "react";
import "./Videos.css";
import VideoContainer from "./VideoContainer";
import { getPopularVideos, getVideosByKeyword } from "./VideosAPIHandler";

function Videos({ setActiveCat, activeCat }) {
  const [data, setData] = useState([]);
  const [nextPageToken, setNextPageToken] = useState("");
  //const [activeCatagory, setActiveCatagory] = useState("All");

  // useEffect(() => {
  //   try {
  //     getPopularVideos().then((res) => {
  //       setData(res.data.items);
  //       setNextPageToken(res.data.nextPageToken);
  //     });
  //   } catch (error) {}
  // }, []);

  const ctagoryButtonClicked = (value) => {};
  useEffect(() => {
    try {
      if (activeCat() !== "All") {
        getVideosByKeyword(activeCat()).then((res) => {
          setData(res.data.items);
          setNextPageToken(res.data.nextPageToken);
        });
      } else {
        getPopularVideos().then((res) => {
          setData(res.data.items);
          setNextPageToken(res.data.nextPageToken);
        });
      }
    } catch (error) {}
  }, [activeCat()]);
  return (
    <div className="videos-container">
      {data.map((video, index) => (
        <VideoContainer video={video} key={index} />
      ))}
    </div>
  );
}

export default Videos;
