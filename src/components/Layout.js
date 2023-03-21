import localFont from '@next/font/local'

const osrs = localFont({
  src: [
    {
      path: '../../public/fonts/runescape_chat_font.ttf',
      weight: '400'
    }
  ],
})

export default function Layout ({ children }){
  return (
    <div className={`flex h-full ${osrs.className} font-sans`}>
      <div className="bg-center bg-cover bg-no-repeat z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="min-w-full min-h-full absolute object-cover"
        >
          <source src="https://res.cloudinary.com/dgjsveger/video/upload/v1679344768/background-video_ivcz7m.mp4" type="video/mp4"/>
        </video>
      </div>
      <div className="container mx-auto px-4 z-20">
        {children}
      </div>
    </div>
  )
}