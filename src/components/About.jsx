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
            Sophomore at VIT Vellore in CSE with Block chain Technolgy.Aspiring Software Developer. Enthusiastic about problem-solving.Skilled in C++(Programming language), C, Python, SQL and Web development (HTML, CSS, JAVASCRIPT, REACT). Free to Work on any Software Domain, which makes me learn and grow.
            </p>
            <br />
            <p className="text-xl mt-10">
            My journey into the world of programming began with a fascination for technology. I started by learning the basics of HTML, CSS, and JavaScript, and I was immediately hooked. Over the years, I've honed my skills, expanded my knowledge, and embraced new technologies to stay at the forefront of the industry.As a full-stack developer, I have the unique ability to work on both the front-end and back-end of web applications. Whether it's building responsive user interfaces, optimizing database performance, or implementing complex server-side logic, I enjoy the challenges that come with being a full-stack developer.
            </p>
        </div>
    </div>
  )
};

export default About