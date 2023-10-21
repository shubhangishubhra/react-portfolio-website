import React from "react";
import html from "/Full stack Projects/portfolio_shubhangi/one-portfolio/src/t/experience/html.png";
import css from "/Full stack Projects/portfolio_shubhangi/one-portfolio/src/t/experience/css.png";
import javascript from "/Full stack Projects/portfolio_shubhangi/one-portfolio/src/t/experience/javascript.png";
import reactImage from "/Full stack Projects/portfolio_shubhangi/one-portfolio/src/t/experience/react.png";
import tailwind from "/Full stack Projects/portfolio_shubhangi/one-portfolio/src/t/experience/tailwind.png";

const Experience = () => {
  const experience = [
    {
      id: 1,
      title: "HTML",
      src: html,
    },
    {
      id: 2,
      title: "CSS",
      src: css,
    },
    {
      id: 3,
      title: "JavaScript",
      src: javascript,
    },
    {
      id: 4,
      title: "React",
      src: reactImage,
    },
    {
      id: 5,
      title: "Tailwind",
      src: tailwind,
    },
  ];

  return (
    <div name="skills" className="bg-gradient-to-b from-gray-800 to-black w-full h-screen text-white">
      <div className=" w-full h-full max-w-screen-lg mx-auto p-4">
        <div className="flex items-center justify-center">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500 text-center">Skills</p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {experience.map(({ id, title, src }) => (
            <div
              key={id}
              className="flex flex-col items-center justify-center p-6 shadow-lg odd:shadow-blue-400 even:shadow-rose-400 rounded-xl hover:scale-105 ease-in duration-300"
            >
              <img src={src} width="64px" height="64px" alt="randomness" />
              <h3 className="font-light mt-4 text-center">{title}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
