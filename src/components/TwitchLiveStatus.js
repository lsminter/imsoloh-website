// import { useState } from 'react';
// import axios from 'axios'
// import useSWR from 'swr'

// const BEARER_TOKEN = process.env.NEXT_PUBLIC_BEARER_TOKEN
// const CLIENT_ID = process.env.NEXT_PUBLIC_CLIENT_ID
// const CLIENT_SECRET = process.env.NEXT_PUBLIC_CLIENT_SECRET
// const REDIRECT_URL = 'http://localhost:3000/'

// // put into a function instead of a variable? could .then the whole function?
// const accessToken = useSWR(axios.post('https://id.twitch.tv/oauth2/token', {
//   client_id: CLIENT_ID,
//   client_secret: CLIENT_SECRET,
//   grant_type: 'client_credentials'
// })
// .then(res => {
//   accessToken = res.data.access_token;
// })
// .catch((e) => {
//   console.log(e);
// }));

// const TwitchLiveStatus = () => {
//   const [isLive, setIsLive] = useState(false);

//   axios.get('https://api.twitch.tv/helix/streams?user_login=imsoloh', {
//     headers: {
//       'Client-Id': CLIENT_ID,
//       'Authorization': 'Bearer ' + accessToken
//   }})
//   .then(function (response) {
//     console.log(response);
//   })
//   .catch((e) => {
//     console.log(e);
//   });


//   return (
//     <div className="flex items-center justify-center h-16 bg-gray-800">
//       <span className="text-white">
//         {isLive ? 'Stream is live!' : 'Stream is not live.'}
//       </span>
//     </div>
//   );
// };

// export default TwitchLiveStatus;