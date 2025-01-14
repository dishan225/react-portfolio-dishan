import aboutImg from "../assets/D-3.jpg";
import { ABOUT_TEXT } from "../constants";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h1 
       whileInView={{opacity:1, y:0}}
       initial={{opacity:1, y:-100}}
       transition={{duration:0.5}}
      className="my-20 text-center text-4xl">
        About <span className="text-neutral-500">Me</span>
      </motion.h1>

      <div className="flex flex-wrap">
        {/* Image Section */}
        <motion.div  
              whileInView={{opacity:1, x:0}}
              initial={{opacity:0, x:-100}}
              transition={{duration:0.5}}
              className="w-full md:w-2/4 flex items-end justify-center mb-2">
          <img
            className="rounded-lg h-80 w-80 object-cover"
            src={aboutImg}
            alt="about"
          />
        </motion.div>

        {/* Text Section */}
        <div className="w-full lg:w-1/2 px-8 py-1">
          <motion.div 
              whileInView={{opacity:1, x:0}}
              initial={{opacity:0, x:100}}
              transition={{duration:0.5}}
              className="flex justify-center lg:justify-start">
            <p className="my-2 max-w-xl py-6">{ABOUT_TEXT}</p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
