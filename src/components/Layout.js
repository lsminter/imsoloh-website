import localFont from '@next/font/local'

const osrs = localFont({
  src: '../../public/fonts/runescape_chat_font.ttf'
})

export default function Layout ({ children }){
  return (
    <div className={`flex h-full ${osrs.className}`}>
      <div className="bg-center bg-cover bg-no-repeat z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="min-w-full min-h-full absolute object-cover"
        >
          <source src="/images/background-video.mp4" type="video/mp4"/>
        </video>
      </div>
      <div className="container mx-auto px-4 z-20">
        {children}
      </div>
    </div>
  )
}