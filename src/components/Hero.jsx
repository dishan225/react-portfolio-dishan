import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/D-4.jpg";
import { delay, motion } from "framer-motion";
import { HiDivide } from "react-icons/hi2";

const container= (delay) => ({
  hidden: {x: -100, opacity: 0},
  visible :{
      x:0 ,
      opacity:1,
      transition:{duration:0.5, delay:delay}
  },
})


const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        {/* Text Section */}
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1 
            variants={container(0)}
            initial="hidden"
            animate="visible"
            className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 px-12 lg:text-8xl">
              Dishan Madhuranga
            </motion.h1>
            <motion.span 
            variants={container(0.5)}
            initial="hidden"
            animate="visible"
            className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl 
                    tracking-tight text-transparent px-12 text-center lg:text-left">
              Aspiring Software Engineer | Self-Taught Developer | Tech Enthusiast
            </motion.span>
            <motion.p variants={container(1)}
            initial="hidden"
            animate="visible" className="px-12 py-4">{HERO_CONTENT}
              
            </motion.p>
          </div>
        </div>

        {/* Image Section */}
        <div className="w-full lg:w-1/2 px-20 py-1 flex justify-center lg:justify-end">
          <div className="flex items-center">
            <motion.img
              initial={{x: 100, opacity:0}}
              animate={{x: 0, opacity:1}}
              transition={{duration:1, delay:1.2}}
              src={profilePic}
              alt="Dishan Maduranga"
              className="w-80 h-80 object-cover rounded-full border-4 border-neutral-900 shadow-lg" // Add shadow for emphasis
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
