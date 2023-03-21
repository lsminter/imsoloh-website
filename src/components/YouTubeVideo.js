import { useState, useEffect } from 'react'
import axios from 'axios'; 

export default function YouTubeVideo() {
  const [videoData, setVideoData] = useState(null)

  async function fetchVideoData() {
    try {
      const response = await fetch(
        `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${process.env.NEXT_PUBLIC_CHANNEL_ID}&maxResults=1&order=date&type=video&key=${process.env.NEXT_PUBLIC_API_KEY}`
      );
      const data = await response.json();
      if (data.items && data.items.length > 0) {
        setVideoData(data.items[0]);
      }
    } catch (error) {
      console.error(error);
    }
  }

  fetchVideoData();


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