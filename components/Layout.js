export default function Layout ({ children }){
  return (
    <div className='p-10 bg-hero'>
      <div className="bg-center bg-cover bg-fixed ">
        <div className="container mx-auto px-4">
          {children}
        </div>
      </div>
    </div>
  )
}