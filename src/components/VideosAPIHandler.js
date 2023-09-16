import axios from "axios";

const request = axios.create({
  baseURL: "https://youtube.googleapis.com/youtube/v3/",
  params: {
    key: "AIzaSyCAW7MKPJalo3-C8FEJdRlrIegIJCrlvqc",
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

export default request;
