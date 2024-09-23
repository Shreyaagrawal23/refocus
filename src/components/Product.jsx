import React from 'react'
import Button from './Button'
import img1 from "../assets/64b754980b23ab2f2f2ff9e2_Work Background (1)-p-2000.jpg";

const Product = ({val,mover,count}) => {
  return (
    <div
      
     
      className="w-full p-2 py-5 lg:py-20 lg:px-[10%] b md:h-[23rem] text-white hover:bg-[#7443ff]  "
    >
      <div
        onMouseEnter={() => {
          mover(count);
        }}
        className="max-w-screen-xl mx-auto  flex  items-center justify-between lg:px-10"
      >
        <h1 className=" text-xl lg:text-4xl capitalize font-medium ">
          {val.title}
        </h1>
        <div className="details w-[60%] lg:w-[35%]">
          <p className=" text-sm lg:text-base mb-2 lg:mb-8 ">
            {val.description}
          </p>
          <div className=" lg:flex lg:gap-5 ">
            {val.live && <Button></Button>}
            {val.case && <Button title="case study"></Button>}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product