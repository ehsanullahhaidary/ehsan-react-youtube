import React, { useEffect, useState } from "react";
import "./Videos.css";
import VideoContainer from "./VideoContainer";
import { getPopularVideos, getVideosByKeyword } from "./VideosAPIHandler";

function Videos({ setActiveCat, activeCat }) {
  const [data, setData] = useState([]);
  const [test, setTest] = useState([]);
  const [nextPageToken, setNextPageToken] = useState("");
  // const [activeCatagory, setActiveCatagory] = useState("All");

  useEffect(() => {
    try {
      getPopularVideos().then((res) => {
        console.log(res);
        setData(res.data.items);
        setNextPageToken(res.data.nextPageToken);
      });
    } catch (error) {}
  }, []);

  // useEffect(() => {
  //   try {
  //     getVideosByKeyword(activeCat()).then((res) => {
  //       setData(res.data.items);
  //       setNextPageToken(res.data.nextPageToken);
  //     });
  //   } catch (error) {}
  // }, []);

  return (
    <div className="videos-container">
      {data.map((video) => (
        <VideoContainer video={video} key={video.id} />
      ))}
    </div>
  );
}

export default Videos;
