import React, { useState } from "react";
import img1 from "../assets/tool 1.png";
import img2 from "../assets/tool 2.png";
import img3 from "../assets/tool 3.png";
import img4 from "../assets/tool 4.png";
import img5 from "../assets/tool 5.png";
import img6 from "../assets/tool 6.png";
import { useMotionValueEvent, useScroll } from "framer-motion";

const Work = () => {
   const[images,setImages]=useState([
    { url: img1, top: "50%", left: "50%", isActive: false },
    { url: img2, top: "56%", left: "44%", isActive: false },
    { url: img3, top: "45%", left: "56%", isActive: false },
    { url: img4, top: "60%", left: "53%", isActive: false },
    { url: img5, top: "43%", left: "40%", isActive: false },
    { url: img6, top: "65%", left: "55%", isActive: false },
  ]
 )
 
 const { scrollYProgress } = useScroll();

  scrollYProgress.on("change", (data) => {
   
    function showImages(arr) {
      setImages((prev) => 
        prev.map((item, index) => 
          arr.indexOf(index) === -1 
            ? { ...item, isActive: false } 
            : {...item,  isActive: true}
        
      ))
    }

   switch (Math.floor(data*100)) {
    case 0:
      showImages([])
      break;
    case 1:
      showImages([0]);
      break;
    case 2:
      showImages([0,1]);
      break;
    case 3:
      showImages([0,1,2]);
      break;
    case 4:
      showImages([0,1,2,3]);
      break;
    case 5:
      showImages([0,1,2,3,4]);
      break;
    case 6:
      showImages([0,1,2,3,4,5]);
      break;
   
 
   }
 })
  

  return (
    <div className="w-full mt-20 lg:mt-10 ">
      <div className=" relative max-w-screen-xl mx-auto text-center">
        <h1 className="text-[35vw] leading-none tracking-tight font-medium select-none">
          work
        </h1>
        <div className="hidden lg:block  absolute top-0 w-full h-full ">
          {images.map(
            (elem, index) =>
              elem.isActive && (
                <img 
                  key={index}
                  className="  hidden lg:block absolute lg:w-52 lg:rounded-lg -translate-x-[50%] -translate-y-[50%]"
                  style={{ top: elem.top, left: elem.left }}
                  src={elem.url}
                  alt=""
                />
              )
          )}
        </div>
      </div>
    </div>
  );
};

export default Work;
