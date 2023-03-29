import YouTubeComponent from './SocialsComponents/Youtube.js'
import TwitchComponent from './SocialsComponents/Twitch.js'
import TwitterComponent from './SocialsComponents/Twitter.js'
import EmailComponent from './SocialsComponents/Email.js'
import TwitchLiveStatus from './TwitchLiveStatus.js'

export default function Socials ({ children }){
  return (
    <div className='h-full p-10'>
      <div className='flex justify-center mt-5'>
        <YouTubeComponent />
      </div>
      <div className='flex justify-center mt-5'>
        <TwitchComponent />
      </div>
      <div className='flex justify-center mt-5'>
        <TwitterComponent />
      </div>
      <div className='flex justify-center mt-5'>
        <EmailComponent />
      </div>
      <div className='flex justify-center mt-5'>
        <TwitchLiveStatus />
      </div>
    </div>
  )
}