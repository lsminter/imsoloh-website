export default function Layout ({ children }){
  return (
    <div className='flex h-full'>
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <video
          autoPlay
          loop
          muted
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