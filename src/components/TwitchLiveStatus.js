import { useState, useEffect } from 'react';
import axios from 'axios';

const TwitchLiveStatus = () => {
  const [isLive, setIsLive] = useState(false);

  useEffect(() => {
    const fetchStream = async () => {
      const response = await axios.get(`https://api.twitch.tv/helix/streams?user_id=${process.env.NEXT_PUBLIC_SOLOH_ID}`, {
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_BEARER_TOKEN}`, 
          'Client-ID': process.env.NEXT_PUBLIC_CLIENT_ID,
        },
      })
      setIsLive(response.data.data.length > 0);
    }
    
    fetchStream()
  }, [])
    
  return (
    <div className="flex justify-center items-center flex-1 max-w-md bg-twitch-purple h-16">
      {isLive
      ? (
        <a href="https://www.twitch.tv/imsoloh" className="flex-1 text-center">
          <span className="text-white text-xl">
            <div>Stream is live! Click to join!</div>
          </span>
        </a>
      )
      : (
        <div href="https://www.twitch.tv/imsoloh" className="flex-1 text-center">
          <span className="text-white text-xl">
          <div>Stream is currently not live.</div>
          </span>
        </div>
      )
      
      }
      
    </div>
  );
};

export default TwitchLiveStatus;