import { useState, useEffect } from 'react'

export default function YouTubeVideo() {
  const [videoData, setVideoData] = useState(null)
  const { API_KEY, CHANNEL_ID } = process.env

  useEffect(() => {
    async function fetchVideoData() {
      const response = await fetch(`/api/youtube?channelID=${CHANNEL_ID}&apiKey=${API_KEY}`)
      const data = await response.json()
      setVideoData(data.items[0])
    }

    fetchVideoData()
  }, [CHANNEL_ID, API_KEY])

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