import { useState, useEffect } from 'react'
import axios from 'axios'; 

export default function YouTubeVideo() {
  const [videoData, setVideoData] = useState(null)

  useEffect(() => {
    async function fetchVideoData() {
      try {
        const response = await axios.get('https://www.googleapis.com/youtube/v3/search', {
          params: {
            part: 'snippet',
            channelId: process.env.NEXT_PUBLIC_CHANNEL_ID,
            maxResults: 1,
            order: 'date',
            type: 'video',
            key: process.env.NEXT_PUBLIC_API_KEY,
          },
        });
        if (response.data.items && response.data.items.length > 0) {
          setVideoData(response.data.items[0]);
        }
      } catch (error) {
        console.error(error);
      }
    }

    fetchVideoData();
  });


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