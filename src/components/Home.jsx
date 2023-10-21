import React from 'react';
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";
import { TypeAnimation } from 'react-type-animation';

const Home = () => {

    return (
        <div
          name="home"
          className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 flex flex-col justify-center text-center"
        >
          <div className="max-w-screen-lg mx-auto p-4">
            <h2 className="text-4xl sm:text-6xl font-bold text-white">
              Hi!, I am Shubhangi 
            </h2>
            
            <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'I am a Software Engineer',
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        'I am a Full Stack Web Developer',
        1000,
        'I am a  Web Designer',
        1000,
        'I am a Problem Solver',
        1000
      ]}
      wrapper="span"
      speed={50}
      style={{ fontSize: '2em', display: 'inline-block' , color: 'white'}}
      repeat={Infinity}
    />
            <Link to="contact" smooth duration={500} className="group text-white w-fit mx-auto px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer">
  Contact Me
  <span className="group-hover:rotate-90 duration-300">
    <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
  </span>
</Link>

          </div>
        </div>
      );
    };      

export default Home