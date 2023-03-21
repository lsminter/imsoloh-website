import { motion } from 'framer-motion'

export default function EmailComponent () {
  return (
    <div>
      <a href='mailto:imsoloh12@gmail.com'>
        <div className="flex justify-center">
          <motion.div className="grid place-items-center grid-cols-5 gap-4 text-center border-solid border-2 border-white p-4" whileHover={{
            scale: .9,
            transition: {
              duration: .2
            } 
          }}>
            <span className='col-start-1 ml-2 text-xl'>
              ImSoloH
            </span> 
            <svg className='col-start-5 mr-2' xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 48" width="64px" height="64px"><linearGradient id="6769YB8EDCGhMGPdL9zwWa" x1="15.072" x2="24.111" y1="13.624" y2="24.129" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#e3e3e3"/><stop offset="1" stopColor="#e2e2e2"/></linearGradient><path fill="url(#6769YB8EDCGhMGPdL9zwWa)" d="M42.485,40H5.515C4.126,40,3,38.874,3,37.485V10.515C3,9.126,4.126,8,5.515,8h36.969	C43.874,8,45,9.126,45,10.515v26.969C45,38.874,43.874,40,42.485,40z"/><linearGradient id="6769YB8EDCGhMGPdL9zwWb" x1="26.453" x2="36.17" y1="25.441" y2="37.643" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#f5f5f5"/><stop offset=".03" stopColor="#eee"/><stop offset="1" stopColor="#eee"/></linearGradient><path fill="url(#6769YB8EDCGhMGPdL9zwWb)" d="M42.485,40H8l37-29v26.485C45,38.874,43.874,40,42.485,40z"/><linearGradient id="6769YB8EDCGhMGPdL9zwWc" x1="3" x2="45" y1="24" y2="24" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#d74a39"/><stop offset="1" stopColor="#c73d28"/></linearGradient><path fill="url(#6769YB8EDCGhMGPdL9zwWc)" d="M5.515,8H8v32H5.515C4.126,40,3,38.874,3,37.485V10.515C3,9.126,4.126,8,5.515,8z M42.485,8	H40v32h2.485C43.874,40,45,38.874,45,37.485V10.515C45,9.126,43.874,8,42.485,8z"/><linearGradient id="6769YB8EDCGhMGPdL9zwWd" x1="24" x2="24" y1="8" y2="38.181" gradientUnits="userSpaceOnUse"><stop offset="0" stopOpacity=".15"/><stop offset="1" stopOpacity=".03"/></linearGradient><path fill="url(#6769YB8EDCGhMGPdL9zwWd)" d="M42.485,40H30.515L3,11.485v-0.969C3,9.126,4.126,8,5.515,8h36.969	C43.874,8,45,9.126,45,10.515v26.969C45,38.874,43.874,40,42.485,40z"/><linearGradient id="6769YB8EDCGhMGPdL9zwWe" x1="3" x2="45" y1="17.73" y2="17.73" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#f5f5f5"/><stop offset="1" stopColor="#f5f5f5"/></linearGradient><path fill="url(#6769YB8EDCGhMGPdL9zwWe)" d="M43.822,13.101L24,27.459L4.178,13.101C3.438,12.565,3,11.707,3,10.793v-0.278	C3,9.126,4.126,8,5.515,8h36.969C43.874,8,45,9.126,45,10.515v0.278C45,11.707,44.562,12.565,43.822,13.101z"/><linearGradient id="6769YB8EDCGhMGPdL9zwWf" x1="24" x2="24" y1="8.446" y2="27.811" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#e05141"/><stop offset="1" stopColor="#de4735"/></linearGradient><path fill="url(#6769YB8EDCGhMGPdL9zwWf)" d="M42.485,8h-0.3L24,21.172L5.815,8h-0.3C4.126,8,3,9.126,3,10.515v0.278	c0,0.914,0.438,1.772,1.178,2.308L24,27.459l19.822-14.358C44.562,12.565,45,11.707,45,10.793v-0.278C45,9.126,43.874,8,42.485,8z"/></svg>
          </motion.div>
        </div>
      </a>
    </div>
  )
}
