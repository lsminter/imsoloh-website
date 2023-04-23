import Socials from '../components/SocialsComponent'
import YouTubeVideo from '../components/YouTubeVideo'

export default function Home() {
  let recentYouTubeVideo;
  if (process.env.NODE_ENV === "production"){
    recentYouTubeVideo = <YouTubeVideo />
  } else {
    recentYouTubeVideo = <div className="flex justify-center w-[560px] h-[315px] bg-white" />
  }

  return (
    <div className="p-10">
      <div className="flex justify-center text-7xl font-bold text-center">
        SoloH
      </div>
      <Socials />
      <div className="text-center text-3xl mb-4">
        Latest YouTube Video
      </div>
      <div className="flex justify-center">
        {recentYouTubeVideo}
      </div>
    </div>
  )
}