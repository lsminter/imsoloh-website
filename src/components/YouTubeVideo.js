import { useState, useEffect } from 'react'

export default function YouTubeVideo() {
  const [videoData, setVideoData] = useState(null)

  useEffect(() => {
    const fetchVideo = async () => {
      const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${process.env.NEXT_PUBLIC_CHANNEL_ID}&maxResults=1&order=date&type=video&key=${process.env.NEXT_PUBLIC_API_KEY}`;

      const response = await fetch(url);

      if (response.ok) {
        const data = await response.json();
        setVideoData(data.items[0]);
      }
    };

    fetchVideo();
  }, []);


  return (
    <div className="flex justify-center items-center">
      {videoData ? (
        <iframe
          src={`https://www.youtube.com/embed/${videoData.id.videoId}`}
          title={videoData.snippet.title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="flex max-w-[560px] max-h-[315px]"
        />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  )
}