import React from 'react';

const About = () => {
  return (
    <div name = "about" className = "w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white">
        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
            <div className="pb-8">
            <div className="flex items-center justify-center ">
                <p className=" text-4xl font-bold inline border-b-4 border-gray-500 text-center">About Me</p>
                </div>
            </div>
            <p className="text-xl mt20">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id officia quos, quia sunt, eius dignissimos illo corrupti neque odio, pariatur ullam optio minus voluptatem rem animi. Enim veniam dolores repellat.
            </p>
            <br />
            <p className="text-xl">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id officia quos, quia sunt, eius dignissimos illo corrupti neque odio, pariatur ullam optio minus voluptatem rem animi. Enim veniam dolores repellat.
            </p>
        </div>
    </div>
  )
};

export default About