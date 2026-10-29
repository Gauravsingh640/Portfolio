
import React from "react";

import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import reactImage from "../assets/react.png";
import nextjs from "../assets/nextjs.png";
import graphql from "../assets/graphql.png";
import github from "../assets/github.png";
import tailwind from "../assets/tailwind.png";
import node from "../assets/node.png";
import express from "../assets/express.png";
import mongodb from "../assets/mongodb.png";
import redux from "../assets/redux.png";

const techs = [
  { id: 1, src: html, title: "HTML", style: "shadow-orange-500" },
  { id: 2, src: css, title: "CSS", style: "shadow-blue-500" },
  { id: 3, src: javascript, title: "JavaScript", style: "shadow-yellow-500" },
  { id: 4, src: reactImage, title: "React", style: "shadow-blue-600" },
  { id: 5, src: node, title: "Node.js", style: "shadow-green-400" },
  { id: 6, src: nextjs, title: "Next.js", style: "shadow-white" },
  { id: 7, src: graphql, title: "GraphQL", style: "shadow-pink-400" },
  { id: 8, src: github, title: "GitHub", style: "shadow-gray-400" },
  { id: 9, src: tailwind, title: "Tailwind CSS", style: "shadow-sky-400" },
  { id: 10, src: express, title: "Express.js", style: "shadow-white" },
  { id: 11, src: mongodb, title: "MongoDB", style: "shadow-green-500" },
  { id: 12, src: redux, title: "Redux", style: "shadow-purple-500" },
];

const Experience = () => {
  return (
    <div
      name="experience"
      className="w-full bg-gradient-to-b from-gray-800 to-black text-white experience scroll-mt-20"
    >
      <div className="max-w-screen-lg mx-auto px-6 py-12 flex flex-col w-full">
        <div className="pb-6">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Experience
          </p>

          <p className="py-6 text-gray-300">
            These are the technologies I've worked with and used in my projects.
          </p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 sm:gap-8 text-center">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`flex flex-col items-center justify-center min-h-[140px] p-4 rounded-lg shadow-md hover:scale-105 hover:shadow-xl transition-transform duration-300 ${style}`}
            >
              <img
                src={src}
                alt={title}
                className="w-16 h-16 sm:w-20 sm:h-20 object-contain"
              />

              <p className="mt-4 font-medium">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
