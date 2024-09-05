"use client";

import { useEffect, useState } from "react";
import ProjectDiv from "@/components/ProjectDiv";

const Home = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <>
      <div className="lg:h-[70px] h-[130px]" />
      <ProjectDiv classname="m-4 p-2">
        <h1 className="text-center text-3xl mb-1">Music Based Platformer</h1>
        <p>
          I made two video games for my Game Design and Development: Programming
          and Practice course during the fall of my junior year.
          <br />
          These video games were made in the Unity game engine and scripting was
          done in C#. They were made in groups of three to five people, which
          required extensive knowledge of and collaboration in Git.
          <br />
          The course included visits to Crytek headquarters, DokkX, DE:HIVE, and
          developer presentations in Aarhus, Denmark and Berlin, Germany.
        </p>
      </ProjectDiv>
      {isClient && (
        <ProjectDiv classname="m-4 p-2">
          <div className="flex justify-center">
            <iframe
              className="w-[552px] h-[167px]"
              src="https://itch.io/embed/2323037"
            >
              <a href="https://vahnk.itch.io/musictime-v1">
                MusicTime v1 by vahnk
              </a>
            </iframe>
          </div>
          <p>
            Music Time is a 2D platformer with original music and unique
            music-based mechanics. It was made in three weeks. My contributions:
          </p>
          <ul className="list-disc ml-4">
            <li>Creation and recording of the level music</li>
            <li>Instrument-specific game mechanics</li>
            <li>Level transitions and animations</li>
            <li>Level design</li>
            <li>General polishing and cosmetics</li>
          </ul>
          <br />
          <i>
            Note: the game is not designed for web, and as such there are
            several minor glitches that occur when playing through itch.io. For
            the best experience, download the build linked in my{" "}
            <a
              href="https://github.com/imvahn/2DPlatformerProject"
              target="_blank"
            >
              <b>GitHub</b>
            </a>
            .
          </i>
        </ProjectDiv>
      )}
    </>
  );
};

export default Home;
