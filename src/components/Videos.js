import React, { useEffect, useState } from "react";
import "./Videos.css";
import VideoContainer from "./VideoContainer";
import { getPopularVideos } from "./VideosAPIHandler";

function Videos() {
  const [data, setData] = useState([]);
  const [nextPageToken, setNextPageToken] = useState("");

  useEffect(() => {
    try {
      getPopularVideos().then((res) => {
        setData(res.data.items);
        setNextPageToken(res.data.nextPageToken);
      });
    } catch (error) {}
  }, []);

  return (
    <div className="videos-container">
      {data.map((video) => (
        <VideoContainer video={video} key={video.id} />
      ))}
    </div>
  );
}

export default Videos;
