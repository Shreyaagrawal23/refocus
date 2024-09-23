import React from "react";
import refocusLogo from "../assets/refocus_logo_img.svg";
import Button from "./Button";

const Navbar = () => {
  return (
    <div className="max-w-screen-xl mx-auto p-y gap-[10%] flex items-center justify-between p-5 border-b-[1px] border-zinc-700 ">
      <div className="nleft flex items-center">
        <img src={refocusLogo} alt="refocus logo" />
        <div className="links flex   md:gap-[30%] md:ml-32">
          {["Home", "Work", "Culture", "", "News"].map((elem, index) =>
            elem.length === 0 ? (
              <span
                key={index}
                className="md:min-w-[2px] md:h-5 md:bg-zinc-700 "
              ></span>
            ) : (
              <a
                key={index}
                className="hidden md:text-sm md:flex md:items-center md:gap-1 md:font-normal "
                href="#"
              >
                {index === 1 && (
                  <span
                    style={{ boxShadow: "0 0 0.45em #00FF19" }}
                    className="md:inline-block w-1 h-1 bg-green-500 rounded-full"
                  ></span>
                )}

                {elem}
              </a>
            )
          )}
        </div>
      </div>
      <Button></Button>
    </div>
  );
};

export default Navbar;
