import React, { useEffect, useState } from "react";
import "./VideoContainer.css";
import request from "./VideosAPIHandler";
import moment from "moment";
import numeral from "numeral";
import test from "../images/test.jpg";

function VideoContainer({ video }) {
  const {
    id,
    snippet: {
      channelId,
      channelTitle,
      title,
      publishedAt,
      thumbnails: { medium },
    },
  } = video;

  const [views, setViews] = useState(null);
  const [duration, setDuration] = useState(null);
  const [channelIcon, setChannelIcon] = useState(null);

  const seconds = moment.duration(duration).asSeconds();
  const video_duration = moment.utc(seconds * 1000).format("mm:ss");

  useEffect(() => {
    const get_video_details = async () => {
      const {
        data: { items },
      } = await request("/videos", {
        params: {
          part: "contentDetails,statistics",
          id: id,
        },
      });
      // console.log(items);
      // console.log(video);
      setDuration(items[0].contentDetails.duration);
      setViews(items[0].statistics.viewCount);
    };
    get_video_details();
  }, [id]);

  useEffect(() => {
    const get_channel_icon = async () => {
      const {
        data: { items },
      } = await request("/channels", {
        params: {
          part: "snippet",
          id: channelId,
        },
      });
      setChannelIcon(items[0].snippet.thumbnails.default.url);
    };
    get_channel_icon();
  }, [channelId]);

  return (
    <div className="videos-container__video-container">
      <div className="videos-container__image-container">
        <img
          className="videos-container__video-container--iframe"
          alt=""
          src={medium.url}
          style={{ backgroundColor: "transparent" }}
          // src={test}
        />
        <div className="videos-container__video-duraion">
          <span className="">{video_duration}</span>
        </div>
      </div>

      <div className="videos-container__video-container--middle-div">
        <img src={channelIcon} alt={""} />
        <p>{title}</p>
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
          <p>{channelTitle}</p>
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
        <p>
          {numeral(views).format("0.a")} views • {moment(publishedAt).fromNow()}
        </p>
      </div>
    </div>
    //     <div className="videos-container__video-container">
    //     <iframe
    //       className="videos-container__video-container--iframe"
    //       width="560"
    //       height="315"
    //       src="https://www.youtube.com/embed/hkP-g9EcYbo"
    //       title="YouTube video player"
    //       frameborder="0"
    //       allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    //       allowfullscreen
    //     ></iframe>
    //     <div className="videos-container__video-container--middle-div">
    //       <img
    //         src="https://yt3.ggpht.com/EpunmP_QxObRT33gHSmoZppAf0UniOg5CiQPtxw6LGMfY13Bic_6WfT9xEzHtmODB3IbmRIS=s48-c-k-c0x00ffffff-no-rj"
    //         alt="BelievingBeings"
    //       />
    //       <p>
    //         Does God Exist? - Dr Zakir Naik in Qatar | Full Lecture + Q&A Session
    //       </p>
    //       <div className="videos-container__video-container--middle-div--icon">
    //         <svg
    //           viewBox="0 0 24 24"
    //           preserveAspectRatio="xMidYMid meet"
    //           focusable="false"
    //           className="style-scope yt-icon"
    //           style={{ width: "100%", height: "100%" }}
    //         >
    //           <g className="style-scope yt-icon">
    //             <path
    //               d="M12,16.5c0.83,0,1.5,0.67,1.5,1.5s-0.67,1.5-1.5,1.5s-1.5-0.67-1.5-1.5S11.17,16.5,12,16.5z M10.5,12 c0,0.83,0.67,1.5,1.5,1.5s1.5-0.67,1.5-1.5s-0.67-1.5-1.5-1.5S10.5,11.17,10.5,12z M10.5,6c0,0.83,0.67,1.5,1.5,1.5 s1.5-0.67,1.5-1.5S12.83,4.5,12,4.5S10.5,5.17,10.5,6z"
    //               className="style-scope yt-icon"
    //             ></path>
    //           </g>
    //         </svg>
    //       </div>
    //     </div>
    //     <div className="videos-container__video-container--bottom-div">
    //       <div className="videos-container__video-container--bottom-div--text-icon">
    //         <p>BelievingBeings</p>
    //         <svg
    //           viewBox="0 0 24 24"
    //           preserveAspectRatio="xMidYMid meet"
    //           focusable="false"
    //           className="style-scope yt-icon"
    //           style={{
    //             pointerEvents: "none",
    //             display: "block",
    //             width: "100%",
    //             height: "100%",
    //           }}
    //         >
    //           <g className="style-scope yt-icon">
    //             <path
    //               d="M12,2C6.5,2,2,6.5,2,12c0,5.5,4.5,10,10,10s10-4.5,10-10C22,6.5,17.5,2,12,2z M9.8,17.3l-4.2-4.1L7,11.8l2.8,2.7L17,7.4 l1.4,1.4L9.8,17.3z"
    //               className="style-scope yt-icon"
    //             ></path>
    //           </g>
    //         </svg>
    //       </div>
    //       <p>871K views . 1 month ago</p>
    //     </div>
    //   </div>
  );
}

export default VideoContainer;
