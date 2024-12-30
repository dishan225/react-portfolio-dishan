import { RiReactjsLine } from "react-icons/ri";
import { SiMongodb, SiNextdotjs, SiPostgresql, SiNodedotjs } from "react-icons/si";
import { motion } from "framer-motion";

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10], // The bouncing motion
    transition: {
      duration: duration, // Duration for one full cycle
      ease: "linear", // Smooth motion
      repeat: Infinity, // Loop forever
      repeatType: "reverse", // Reverse the direction instead of starting over
    },
  },
});

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <motion.h1 
      whileInView={{opacity:1, y:0}}
      initial={{opacity:1, y:-100}}
      transition={{duration:1.5}}
      className="my-20 text-center text-4xl font-semibold">Technologies</motion.h1>
      <motion.div 
        whileInView={{opacity:1, x:0}}
        initial={{opacity:0, x:-100}}
        transition={{duration:1.5}}

        className="flex flex-wrap items-center justify-center gap-6">
        {/* ReactJS */}
        <motion.div 
            variants={iconVariants(2.5)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border border-neutral-800 p-6 shadow-md hover:scale-105 transition-transform">
          <RiReactjsLine className="text-7xl text-cyan-400" />
          
        </motion.div>

        {/* MongoDB */}
        <motion.div 
            variants={iconVariants(3)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border border-neutral-800 p-6 shadow-md hover:scale-105 transition-transform">
          <SiMongodb className="text-7xl text-green-500" />
          
        </motion.div>

        {/* Next.js */}
        <motion.div 
            variants={iconVariants(5)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border border-neutral-800 p-6 shadow-md hover:scale-105 transition-transform">
          <SiNextdotjs className="text-7xl text-neutral-100" />
          
        </motion.div>

        {/* PostgreSQL */}
        <motion.div 
            variants={iconVariants(2)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border border-neutral-800 p-6 shadow-md hover:scale-105 transition-transform">
          <SiPostgresql className="text-7xl text-blue-500" />
          
        </motion.div>

        {/* Node.js */}
        <motion.div 
            variants={iconVariants(6)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border border-neutral-800 p-6 shadow-md hover:scale-105 transition-transform">
          <SiNodedotjs className="text-7xl text-green-400" />
         
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Technologies;
