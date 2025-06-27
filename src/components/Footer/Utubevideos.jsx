import { useState, useEffect } from "react";
// import "./Utubevideos.css";

function UtubeVideos() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UCE_M8A5yxnLfW0KghEeajjw&maxResults=8&order=date&key=AIzaSyBw_IBV2Kxr766OLUjWOSTNwNrVvu5RHes`
    )
      .then((res) => {
       return res.json()
      })
      .then((data) => {
        setVideos(data.items || []);
      })
      .catch((error) => console.error("Error fetching videos:", error));
  }, []);

  return (
    <div className="container video-section">
      <h2 className="text-center mb-4">Latest Videos</h2>
      <div className="row">
        {videos.map((video, index) => (
          <div className="col-sm-12 col-md-6 col-lg-6 mb-4" key={index}>
            <div className="card video-card h-100 shadow-sm">
              <a
                href={`https://www.youtube.com/watch?v=${video.id.videoId}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={video.snippet.thumbnails.high.url}
                  className="card-img-top"
                  alt={video.snippet.title}
                />
              </a>
              <div className="card-body">
                <h5 className="card-title">{video.snippet.title}</h5>
                <p className="card-text">
                  {video.snippet.description.substring(0, 100)}...
                </p>
                <p className="text-muted small">
                  Published:{" "}
                  {new Date(video.snippet.publishedAt).toLocaleDateString()}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default UtubeVideos;
