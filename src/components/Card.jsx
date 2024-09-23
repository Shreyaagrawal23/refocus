import { motion } from "framer-motion";
import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";


const Card = ({ width, start, para, hover='false' }) => {
  return (
    <motion.div whileHover={{backgroundColor: hover === true && '#7443ff', padding:"25px"}} className={`m-2 bg-zinc-800 p-5 rounded-md ${width}   lg:m-0 `}>
      <div className="w-full">
        <div className="w-full flex justify-between items-center ">
          <h3>Up Next News</h3>
          <IoIosArrowRoundForward></IoIosArrowRoundForward>
        </div>
        <div>
          <h1 className=" text-xl md:text-3xl font-medium mt-5 ">
            Insight and behind the senses
          </h1>
        </div>
      </div>
      <div className="down w-full mt-32 lg:mt-60">
        {start && (
          <>
            <h1 className="text-2xl lg:text-6xl font-semibold tracking-tight leading-none">
              Start a Project
            </h1>
            <button className="mt-5 rounded-full px-5 py-1 border-[1px] border-zinc-500">
              contact us
            </button>{" "}
          </>
        ) }
        {para &&(
          <p className="text-sm text-zinc-500 ">
            Lorem ipsum dolor sit amet consectetur adipisicing.
          </p>
        ) }
      </div>
    </motion.div>
  );
};

export default Card;
