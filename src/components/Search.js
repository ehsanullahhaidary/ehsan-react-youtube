import { React, useEffect, useState } from "react";
import "./Search.css";
// import useLocation from "react-router-dom";
import { useLocation } from "react-router-dom";
import { getVideosByKeyword } from "./VideosAPIHandler";

function Search() {
  const location = useLocation();
  const {
    state: { inputSearch },
  } = location;
  const [data, setData] = useState([]);
  const [nextPageToken, setNextPageToken] = useState("");

  useEffect(() => {
    try {
      getVideosByKeyword(inputSearch).then((res) => {
        setData(res.data.items);
        setNextPageToken(res.data.nextPageToken);
        console.log(res.data.items);
      });
    } catch (error) {}
  }, [inputSearch]);
  return (
    <div className="searchVideos">
      <div>Search</div>
    </div>
  );
}

export default Search;
