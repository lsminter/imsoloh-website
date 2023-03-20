import { motion } from 'framer-motion'

export default function YouTubeComponent () {
  return (
    <div>
      <a href='https://www.youtube.com/@imsoloh'>
        <div className="flex justify-center">
          <motion.div className="grid place-items-center grid-cols-4 gap-4 text-center border-solid border-2 border-youtube-red p-4 min-w-min" whileHover={{
            scale: .9,
            borderColor:'#05ADAD',
            transition: {
              duration: .2
            } 
          }}>
            <span className='col-start-1 ml-2'>
              ImSoloH
            </span> 
            <svg className='col-start-4 mr-2' xmlns="http://www.w3.org/2000/svg" height="64" width="64" viewBox="-35.20005 -41.33325 305.0671 247.9995"><path d="M93.333 117.559V47.775l61.334 34.893zm136.43-91.742c-2.699-10.162-10.651-18.165-20.747-20.881C190.716 0 117.333 0 117.333 0S43.951 0 25.651 4.936C15.555 7.652 7.603 15.655 4.904 25.817 0 44.236 0 82.667 0 82.667s0 38.429 4.904 56.849c2.699 10.163 10.65 18.165 20.747 20.883 18.3 4.934 91.682 4.934 91.682 4.934s73.383 0 91.683-4.934c10.096-2.718 18.048-10.72 20.747-20.883 4.904-18.42 4.904-56.85 4.904-56.85s0-38.43-4.904-56.849" fill="#fff"/></svg>
          </motion.div>
        </div>
      </a>
    </div>
  )
}
