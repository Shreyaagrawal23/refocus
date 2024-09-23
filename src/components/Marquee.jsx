import { motion } from 'framer-motion';
import React from 'react'


const Marquee = ({imagesUrls}) => {
  return (
    <div className="flex  w-full  overflow-hidden">
      <motion.div
        initial={{ x: "0" }}
        animate={{ x: "-100% " }}
        transition={{ ease: "linear", duration: 10,repeat: Infinity }}
        className="flex flex-shrink-0 gap-10 md:gap-32 py-10 pr-40"
      >
        {imagesUrls.map((url, index) => (
          <img src={url} key={index}></img>
        ))}
      </motion.div>
      <motion.div
        initial={{ x: "0" }}
        animate={{ x: "-100% " }}
        transition={{ ease: "linear", duration: 10, repeat:Infinity }}
        className="flex flex-shrink-0 gap-10 md:gap-32 py-10 pr-40"
      >
        {imagesUrls.map((url, index) => (
          <img src={url} key={index}></img>
        ))}
      </motion.div>
    </div>
  );
}

export default Marquee