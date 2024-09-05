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
        <h1 className="text-center text-3xl mb-1">Virtual Escape Room</h1>
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
          <div className="w-full flex justify-center">
            <iframe
              className="h-[167px] w-[552px]"
              src="https://itch.io/embed/2445407"
            >
              <a href="https://vahnk.itch.io/game-design-final">
                Failed Musician Escape Room by vahnk
              </a>
            </iframe>
          </div>
          <p>
            Failed Musician Escape Room is a virtual escape room about a
            musician who needs to get his life together and write some music.
            The player completes several puzzles with the end goal of writing a
            song. It was made in four weeks. My contributions:
          </p>
          <p>
            <ul className="list-disc ml-4">
              <li>Interaction mechanics (press E to open, close, etc.)</li>
              <li>Pick up/carry objects mechanics</li>
              <li>Sound design</li>
              <li>Start menu and pause menu</li>
              <li>TV puzzle + ad creation</li>
              <li>Sheet music</li>
              <li>Apartment design</li>
              <li>Props</li>
            </ul>
            <br />
            <i>
              Note: the game is not designed for web, and as such there are
              several minor glitches that occur when playing through itch.io
              (mouse cursor leaves the game even when in fullscreen, quit button
              freezes the game). For the best experience, download the build
              linked in my{" "}
              <a
                href="https://github.com/imvahn/GameDesignFinal2023"
                target="_blank"
              >
                <b>GitHub</b>
              </a>
              .
            </i>
            <br />
            <br />
            Walkthrough:
          </p>
          <p>
            <ol className="list-decimal ml-7">
              <li>Read texts from your girlfriend.</li>
              <li>Pick up beer bottles in the bedroom and throw them out</li>
              <li>
                Read "Emails to my Love" on the living room table, the
                highlighted music notes correspond to the computer password
              </li>
              <li>Computer password: DGBCG</li>
              <li>
                Find the remote in the kitchen drawer to the left of the oven
                and turn on the TV
              </li>
              <li>
                Find the key in the box in the hallway and unlock the fridge
              </li>
              <li>
                Open the leftmost bathroom cabinet to find the box of cigarettes
              </li>
              <li>
                Fill in the missing lyrics: "Cigarettes", "guitar picks",
                "energy drinks", "Pookie"
              </li>
              <li>
                The number of each of the four items found around the room
                corresponds to the numbers on the keypad next to the music room
                door, and the order of these numbers is determined by the order
                of the missing lyrics.
              </li>
              <li>Keypad code: 1824</li>
              <li>
                Take the inspiration pills in the right drawer of the desk in
                the music room
              </li>
              <li>
                The letters in front of the computer, TV, fridge, and bathroom
                cabinet are the letters of the chords that correspond to each of
                the four items mentioned in the song
              </li>
              <li>
                Fill in the chords with their respective items in the sheet
                music on the piano: G, Bb, A, F
              </li>
            </ol>
          </p>
        </ProjectDiv>
      )}
    </>
  );
};

export default Home;
