import React, { useState } from "react";
import "./Videos.css";
import VideoContainer from "./VideoContainer";
import request, { getPopularVideos } from "./VideosAPIHandler";

function Videos() {
  const [data, setData] = useState(Object);

  const res = async () => {
    const response = await getPopularVideos();
    setData(response.items);
  };
  // res();
  console.log(data);
  return (
    <div class="videos-container">
      <VideoContainer
        title="Does God Exist? - Dr Zakir Naik in Qatar | Full Lecture + Q&A Session"
        views="871K views"
        timstamp="1 month ago"
        channel="BelievingBeings"
        channelImage="https://yt3.ggpht.com/EpunmP_QxObRT33gHSmoZppAf0UniOg5CiQPtxw6LGMfY13Bic_6WfT9xEzHtmODB3IbmRIS=s48-c-k-c0x00ffffff-no-rj"
      />
      <VideoContainer
        title="Does God Exist? - Dr Zakir Naik in Qatar | Full Lecture + Q&A Session"
        views="871K views"
        timstamp="1 month ago"
        channel="BelievingBeings"
        channelImage="https://yt3.ggpht.com/EpunmP_QxObRT33gHSmoZppAf0UniOg5CiQPtxw6LGMfY13Bic_6WfT9xEzHtmODB3IbmRIS=s48-c-k-c0x00ffffff-no-rj"
      />
      <VideoContainer
        title="Does God Exist? - Dr Zakir Naik in Qatar | Full Lecture + Q&A Session"
        views="871K views"
        timstamp="1 month ago"
        channel="BelievingBeings"
        channelImage="https://yt3.ggpht.com/EpunmP_QxObRT33gHSmoZppAf0UniOg5CiQPtxw6LGMfY13Bic_6WfT9xEzHtmODB3IbmRIS=s48-c-k-c0x00ffffff-no-rj"
      />
      <VideoContainer
        title="Does God Exist? - Dr Zakir Naik in Qatar | Full Lecture + Q&A Session"
        views="871K views"
        timstamp="1 month ago"
        channel="BelievingBeings"
        channelImage="https://yt3.ggpht.com/EpunmP_QxObRT33gHSmoZppAf0UniOg5CiQPtxw6LGMfY13Bic_6WfT9xEzHtmODB3IbmRIS=s48-c-k-c0x00ffffff-no-rj"
      />
      <VideoContainer
        title="Does God Exist? - Dr Zakir Naik in Qatar | Full Lecture + Q&A Session"
        views="871K views"
        timstamp="1 month ago"
        channel="BelievingBeings"
        channelImage="https://yt3.ggpht.com/EpunmP_QxObRT33gHSmoZppAf0UniOg5CiQPtxw6LGMfY13Bic_6WfT9xEzHtmODB3IbmRIS=s48-c-k-c0x00ffffff-no-rj"
      />
      <VideoContainer
        title="Does God Exist? - Dr Zakir Naik in Qatar | Full Lecture + Q&A Session"
        views="871K views"
        timstamp="1 month ago"
        channel="BelievingBeings"
        channelImage="https://yt3.ggpht.com/EpunmP_QxObRT33gHSmoZppAf0UniOg5CiQPtxw6LGMfY13Bic_6WfT9xEzHtmODB3IbmRIS=s48-c-k-c0x00ffffff-no-rj"
      />
      <VideoContainer
        title="Does God Exist? - Dr Zakir Naik in Qatar | Full Lecture + Q&A Session"
        views="871K views"
        timstamp="1 month ago"
        channel="BelievingBeings"
        channelImage="https://yt3.ggpht.com/EpunmP_QxObRT33gHSmoZppAf0UniOg5CiQPtxw6LGMfY13Bic_6WfT9xEzHtmODB3IbmRIS=s48-c-k-c0x00ffffff-no-rj"
      />
      <VideoContainer
        title="Does God Exist? - Dr Zakir Naik in Qatar | Full Lecture + Q&A Session"
        views="871K views"
        timstamp="1 month ago"
        channel="BelievingBeings"
        channelImage="https://yt3.ggpht.com/EpunmP_QxObRT33gHSmoZppAf0UniOg5CiQPtxw6LGMfY13Bic_6WfT9xEzHtmODB3IbmRIS=s48-c-k-c0x00ffffff-no-rj"
      />
      <VideoContainer
        title="Does God Exist? - Dr Zakir Naik in Qatar | Full Lecture + Q&A Session"
        views="871K views"
        timstamp="1 month ago"
        channel="BelievingBeings"
        channelImage="https://yt3.ggpht.com/EpunmP_QxObRT33gHSmoZppAf0UniOg5CiQPtxw6LGMfY13Bic_6WfT9xEzHtmODB3IbmRIS=s48-c-k-c0x00ffffff-no-rj"
      />
      <VideoContainer
        title="Does God Exist? - Dr Zakir Naik in Qatar | Full Lecture + Q&A Session"
        views="871K views"
        timstamp="1 month ago"
        channel="BelievingBeings"
        channelImage="https://yt3.ggpht.com/EpunmP_QxObRT33gHSmoZppAf0UniOg5CiQPtxw6LGMfY13Bic_6WfT9xEzHtmODB3IbmRIS=s48-c-k-c0x00ffffff-no-rj"
      />
    </div>
  );
}

export default Videos;
