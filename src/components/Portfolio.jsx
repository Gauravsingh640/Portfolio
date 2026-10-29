
import React from "react";
import portfolio from "../assets/project/portfolio.png";
import coffee from "../assets/project/coffee.png";
import CareerSathi from "../assets/project/careerSathi.png";
import gym from "../assets/project/gym.png";
import Quickart from "../assets/project/quickart.png";
import bpitsih from "../assets/project/bpitSih.png";

const portfolios = [
  {
    id: 1,
    title: "CareerSathi",
    src: CareerSathi,
    link: "https://minor-project-sih-x8in-329di4066-gauravs-projects-b95cbca2.vercel.app/",
    repo: "https://github.com/Gauravsingh640/Minor-Project-SIH",
  },
  {
    id: 2,
    title: "Quickart",
    src: Quickart,
    link: "https://quickart-one.vercel.app/",
    repo: "https://github.com/Gauravsingh640/Quickart",
  },
  {
    id: 3,
    title: "Coffee Website",
    src: coffee,
    link: "https://coffee-website-peach-chi.vercel.app/",
    repo: "https://github.com/Gauravsingh640/coffee-website",
  },
  {
    id: 4,
    title: "BPIT SIH",
    src: bpitsih,
    link: "https://bpit-sih.vercel.app/",
    repo: "https://github.com/pandeyayush260804/bpit-sih",
  },
  {
    id: 5,
    title: "Portfolio Website",
    src: portfolio,
    link: "",
    repo: "",
  },
  {
    id: 6,
    title: "AI Gym Recommendation",
    src: gym,
    link: "https://github.com/Gauravsingh640/AI-Based-Gym-Workout-Recommendation-System",
    repo: "https://github.com/Gauravsingh640/AI-Based-Gym-Workout-Recommendation-System",
  },
];

const Portfolio = () => {
  return (
    <div
      name="portfolio"
      className="w-full bg-gradient-to-b from-black to-gray-800 text-white portfolio"
    >
      <div className="max-w-screen-xl px-6 py-12 mx-auto flex flex-col w-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6 text-lg">
            Check out some of my work right here
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {portfolios.map(({ id, title, src, link, repo }) => (
            <div
              key={id}
              className="rounded-xl overflow-hidden shadow-lg shadow-gray-600/50 bg-gray-900 flex flex-col"
            >
              <div className="w-full h-[220px] sm:h-[240px] overflow-hidden bg-gray-800 flex items-center justify-center">
                <img
                  src={src}
                  alt={title}
                  className="w-full h-full object-contain transition-transform duration-300 hover:scale-105"
                />
              </div>

              <div className="flex flex-col items-center justify-between flex-grow min-h-[110px] p-4">
                <h3 className="text-lg font-semibold text-center mb-3">
                  {title}
                </h3>

                <div className="flex items-center justify-center gap-4 mt-auto">
                  <button
                    type="button"
                    disabled={!link}
                    onClick={() =>
                      link && window.open(link, "_blank", "noopener,noreferrer")
                    }
                    className="px-5 py-2 rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 hover:scale-105 duration-200 disabled:opacity-40 disabled:cursor-not-allowed"
                  >
                    Demo
                  </button>

                  <button
                    type="button"
                    disabled={!repo}
                    onClick={() =>
                      repo && window.open(repo, "_blank", "noopener,noreferrer")
                    }
                    className="px-5 py-2 rounded-md border border-gray-500 hover:bg-gray-700 duration-200 disabled:opacity-40 disabled:cursor-not-allowed"
                  >
                    GitHub
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
