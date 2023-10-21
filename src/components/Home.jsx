import React from 'react';
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

const Home = () => {
    return (
        <div
          name="home"
          className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 flex flex-col justify-center text-center"
        >
          <div className="max-w-screen-lg mx-auto p-4">
            <h2 className="text-4xl sm:text-6xl font-bold text-white">
              I am a Full Stack Developer
            </h2>
            <p className="text-gray-500 py-4 max-w-md mx-auto">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci alias asperiores at
            </p>
            <Link to="contact" smooth duration={500} className="group text-white w-fit mx-auto px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer">
  Portfolio
  <span className="group-hover:rotate-90 duration-300">
    <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
  </span>
</Link>

          </div>
        </div>
      );
    };      

export default Home