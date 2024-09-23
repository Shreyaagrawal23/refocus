import React from "react";
import Product from "./Product";
import { motion } from "framer-motion";
import { useState } from "react";


const Products = () => {
  let products = [
    {
      title: "arqitel",
      description:
        "With a continuous 3D animation, we showcase Arqitel approach and show how migration data translates into real estate.With a continuous 3D animation, we showcase Arqitel approach and show how migration data translates into real estate.",
      live: true,
      case: false,
    },
    {
      title: "TTR",
      description:
        "We've created an interactive site using generative AI to allow users to engage with our thinking about Ai, industry trends and design.",
      live: true,
      case: false,
    },
    {
      title: "Yir 2022",
      description:
        "Our second year was filled with great events, exciting projects, awards and amazing people - so we made another showcase to celebrate.",
      live: true,
      case: true,
    },
    {
      title: "Yahooo",
      description:
        "We enhanced the New York Fashion Week, by creating a fully digital AR fashion experience for Yahoo and Maisie Wilen, featuring holographic 3D models and an integrated web shop.",
      live: true,
      case: true,
    },
    {
      title: "MANIV",
      description:
        "A global early-stage venture fund partnering with founders to advance cleaner, safer, and more sustainable movement of people and goods.",
      live: true,
      case: false,
    },

    {
      title: "CULA",
      description:
        "We immersed ourselves in a 3D world we created to explain how Cula's platform collects data from carbon removal processes and converts them into carbon credit certificates.",
      live: true,
      case: true,
    },
  ];

  const [position, setposition] = useState(0);
  const mover = (val) => {
    setposition(val * 23);
  };
  return (
    <div className=" relative mt-20">
      {products.map((val, index) => (
        <Product val={val} mover={mover} key={index} count={index}></Product>
      ))}
      <div className=" hidden lg:block absolute top-0 w-full h-full pointer-events-none  ">
        <motion.div
          initial={{ y: position, x: "-50%" }}
          animate={{ y: position + `rem` }}
          transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.6 }}
          className=" window absolute md:w-[32rem] md:h-[23rem]  left-[40%]
          -translate-x-[50%] overflow-hidden rounded-lg"
        >
          <motion.div
            animate={{ y: -position + `rem` }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
            className="w-full h-full bg-blue-200 "
          >
            <div>
              <img
                className="w-full h-[23rem] object-cover shadow-lg "
                src="https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNvbXB1dGVyfGVufDB8fDB8fHww"
                alt=""
              />
            </div>
          </motion.div>
          <motion.div
            animate={{ y: -position + `rem` }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
            className="w-full h-full bg-blue-300 "
          >
            <div>
              <img
                className="w-full h-[23rem] object-cover shadow-lg "
                src="https://images.unsplash.com/photo-1709884735626-63e92727d8b6?q=80&w=1856&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
              />
            </div>
          </motion.div>
          <motion.div
            animate={{ y: -position + `rem` }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
            className="w-full h-full bg-blue-400 "
          >
            <div>
              <img
                className="w-full h-[23rem]   object-cover shadow-lg "
                src="https://plus.unsplash.com/premium_photo-1683147638125-fd31a506a429?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjF8fHdlYnNpdGV8ZW58MHx8MHx8fDA%3D"
                alt=""
              />
            </div>
          </motion.div>
          <motion.div
            animate={{ y: -position + `rem` }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
            className="w-full h-full bg-blue-500 "
          >
            <div>
              <img
                className="w-full h-[23rem] object-cover  shadow-lg "
                src="https://images.unsplash.com/photo-1499244571948-7ccddb3583f1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjR8fHdlYnNpdGV8ZW58MHx8MHx8fDA%3D"
                alt=""
              />
            </div>
          </motion.div>
          <motion.div
            animate={{ y: -position + `rem` }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
            className="w-full h-full bg-blue-600 "
          >
            <div>
              <img
                className="w-full h-[23rem] object-cover shadow-lg "
                src="https://images.unsplash.com/photo-1474631245212-32dc3c8310c6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Njd8fHdlYnNpdGV8ZW58MHx8MHx8fDA%3D"
                alt=""
              />
            </div>
          </motion.div>
          <motion.div
            animate={{ y: -position + `rem` }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
            className="w-full h-full bg-blue-600 "
          >
            <div>
              <img
                className="w-full h-[23rem] object-cover  "
                src="https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nzh8fHdlYnNpdGV8ZW58MHx8MHx8fDA%3D"
                alt=""
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Products;
