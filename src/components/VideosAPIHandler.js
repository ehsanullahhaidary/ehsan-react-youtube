import axios from "axios";

const request = axios.create({
  baseURL: "https://youtube.googleapis.com/youtube/v3/",
  params: {
    key: "AIzaSyBqMqPJVbJbeGZjV4ivZ77kTIgj1ucLO50",
  },
});

export const getPopularVideos = async () => {
  try {
    const res = await request.get("/videos", {
      params: {
        part: "snippet,contentDetails,statistics",
        chart: "mostPopular",
        regionCode: "IN",
        maxResults: 20,
        pageToken: "",
      },
    });
    //   .then((response) => response.data);
    return res;
  } catch (error) {}
};

export const getVideosByKeyword = async (keyword) => {
  try {
    const res = await request.get("/search", {
      params: {
        part: "snippet",
        maxResults: 20,
        pageToken: "",
        q: keyword,
        type: "video",
      },
    });
    //   .then((response) => response.data);
    return res;
  } catch (error) {}
};

export default request;
