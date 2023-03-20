export default function Layout ({ children }){
  return (
    <div className='h-full p-10'>
      <div className="container mx-auto px-4">
        {children}
      </div>
    </div>
  )
}