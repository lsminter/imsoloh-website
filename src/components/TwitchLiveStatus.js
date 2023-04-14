import { useState, useEffect } from 'react';
import axios from 'axios';

const TwitchLiveStatus = () => {
  const [isLive, setIsLive] = useState(false);

  useEffect(() => {
    const fetchStream = async () => {
      const response = await axios.post(`https://id.twitch.tv/oauth2/token?client_id=${process.env.NEXT_PUBLIC_CLIENT_ID}&client_secret=${process.env.NEXT_PUBLIC_CLIENT_SECRET}&grant_type=client_credentials`)
      const bearerToken = response.data.access_token
      const getStream = await axios.get(`https://api.twitch.tv/helix/streams?user_login=soloh`, {
        headers: {
          Authorization: `Bearer ${bearerToken}`, 
          'Client-ID': process.env.NEXT_PUBLIC_CLIENT_ID,
        }
      })
      try {
        setIsLive(getStream.data.data[0].type);
      } catch {
        setIsLive("false")
      }
    }
    
    fetchStream()
  }, [])
    
  return (
    <div className="flex justify-center items-center flex-1 max-w-md bg-twitch-purple h-16">
      {isLive === "live"
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