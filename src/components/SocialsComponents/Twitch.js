import { motion } from 'framer-motion'

export default function TwitchComponent () {
  return (
    <div>
      <a href='https://www.twitch.tv/imsoloh'>
        <div className="flex justify-center">
          <motion.div className="grid place-items-center grid-cols-5 gap-4 text-center border-solid border-2 border-twitch-purple p-4" whileHover={{
            scale: .9,
            borderColor:'#9BBEBD',
            transition: {
              duration: .2
            } 
          }}> 
            <span className='col-start-1 ml-2 text-xl'>
              ImSoloH
            </span>
            <svg className='col-start-5 mr-2' xmlns="http://www.w3.org/2000/svg" width="64" height="64"><path d="M5.7 0L1.4 10.985V55.88h15.284V64h8.597l8.12-8.12h12.418l16.716-16.716V0H5.7zm51.104 36.3L47.25 45.85H31.967l-8.12 8.12v-8.12H10.952V5.73h45.85V36.3zM47.25 16.716v16.716h-5.73V16.716h5.73zm-15.284 0v16.716h-5.73V16.716h5.73z" fill="#6441a4" fillRule="evenodd"/></svg>
          </motion.div>
        </div>
      </a>
    </div>
  )
}
