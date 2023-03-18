import YouTubeComponent from './Youtube.js'
import TwitchComponent from './Twitch.js'
import TwitterComponent from './Twitter.js'
import EmailComponent from './Email.js'

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
    </div>
  )
}