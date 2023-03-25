import { useState, useEffect } from 'react'
import axios from 'axios'; 

export default function YouTubeVideo() {
  const [videoData, setVideoData] = useState(null)

  useEffect(() => {
    const fetchVideo = async () => {
      const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${NEXT_PUBLIC_CHANNEL_ID}&maxResults=1&order=date&type=video&key=${NEXT_PUBLIC_API_KEY}`;

      const response = await fetch(url);

      if (response.ok) {
        const data = await response.json();
        setVideo(data.items[0]);
      }
    };

    fetchVideo();
  }, []);


  return (
    <div className="flex justify-center items-center">
      {videoData ? (
        <iframe
          width="560"
          height="315"
          src={`https://www.youtube.com/embed/${videoData.id.videoId}`}
          title={videoData.snippet.title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  )
}