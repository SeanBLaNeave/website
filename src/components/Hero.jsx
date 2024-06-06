import {motion} from 'framer-motion';

import {styles} from '../style';
import {ComputersCanvas} from './canvas';

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className="flex flex-col justify-center items-center">
          <div className='w-5 h-5 rounded-full bg-white'/>
          <div className="white-gradient w-1 sm:h-80 h-40"/>
        </div>
      </div>
    </section>
  )
}

export default Hero