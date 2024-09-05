"use client";

import Link from "next/link";
import { useRef } from "react";
import { motion, useScroll } from "framer-motion";

const projectItem = [
  {
    title: "Web Scraper",
    description:
      "Designed and implemented Python code that ran on Wesleyan's High Performance Computing Cluster to scrape all of the Honors Theses from Wesleyan's digital collections with BeautifulSoup4. Achieved 100x speedup by utilizing Pandas, Joblib, NumPy.",
    link: "scraper",
  },
  {
    title: "Chess Visualizations",
    description:
      "Used R Studio to pull chess.com datasets of the top chess players in the world to make five interactive data visualizations mapping openings, ELO, board positions, and player locations.",
    link: "chess",
  },
  {
    title: "Virtual Escape Room",
    description:
      "Developed a 3D virtual escape room in Unity with several puzzles that utilize innovative and creative interactions, a well-crafted layout, a compelling theme, and noteworthy visual effects and graphics.",
    contributions: [
      "Interaction mechanics (press E to open, close, etc.)",
      "Pick up/carry objects mechanics",
      "Sound design",
      "Start menu and pause menu",
      "TV puzzle + ad creation",
      "Sheet music",
      "Apartment design",
      "Props",
    ],
    link: "escape",
  },
  {
    title: "Music Time",
    description:
      "Developed a 2D platformer video game in Unity with unique, music-based level mechanics. Created all the music from scratch.",
    contributions: [
      "Creation and recording of the level music",
      "Instrument-specific game mechanics",
      "Level transitions and animations",
      "Level design",
      "General polishing and cosmetic",
    ],
    link: "platformer",
  },
];

const ProjectPanels = () => {
  const ref = useRef(null);
  const { scrollXProgress } = useScroll({ container: ref });

  return (
    <div className="relative w-full lg:h-screen h-full z-0">
      <svg
        id="progress"
        width="100"
        height="100"
        viewBox="0 0 100 100"
        className="absolute top-5 left-5 -rotate-90"
      >
        <circle
          cx="50"
          cy="50"
          r="30"
          pathLength="1"
          className="lg:stroke-[15%] stroke-none fill-none lg:stroke-gray-400 opacity-30"
        />
        <motion.circle
          cx="50"
          cy="50"
          r="30"
          pathLength="1"
          className="lg:stroke-[15%] fill-none lg:stroke-lime-500"
          style={{ pathLength: scrollXProgress }}
        />
      </svg>
      <ul
        ref={ref}
        className="flex lg:flex-row flex-col list-none mt-[7.5%] h-3/4 w-3/4 mx-auto lg:overflow-x-scroll overflow-y-auto px-0 py-5 lg:border-x-2"
      >
        {projectItem.map((item, index) => (
          <Link
            className="lg:flex-[0_0_45%] flex-[0_0_100%] h-full border-2 border-black mx-[0.625rem] mb-4 lg:mb-0 hover:bg-lime-100 hover:ease-in-out duration-150 z-10"
            href={`/projects/${item.link}`}
            key={index}
          >
            <div className="text-left p-5">
              <h1 className="text-5xl mb-5">{item.title}</h1>
              <p className="text-xl mb-5">{item.description}</p>
              {item.contributions && item.contributions.length > 0 ? (
                <>
                  <p className="text-xl">My contributions:</p>
                  {item.contributions.map((i, k) => (
                    <li className="text-base ml-2" key={k}>
                      {i}
                    </li>
                  ))}
                </>
              ) : (
                <></>
              )}
            </div>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default ProjectPanels;
