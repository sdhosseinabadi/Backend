/* 
IMPORTANT NOTE FOR DEVELOPERS WORKING ON THIS PAGE ⚠
======================================================================================

THIS PAGE USES REACT-CHRONO TO RENDER TIMELINES
https://github.com/prabhuignoto/react-chrono

ALL THE DATA RENDERED IN THIS FILE ARE FETCCHED FROM "./api/event_data" FILE.

NOTE:
======================================================================================
THE DATE MUST HAVE THE KEY VALUE OF "title", TO REDNER IT AS A SEPERATE COMPONENT, AND ITS MANDATORY.

THEMING THE CHRONO-COMPONENT WILL TAKE EFFECT IN BOTH THE DARK AND LIGHT MODES OF NEXT-THEME.

TAILWIND DARK CLASSES WILL ONLY TAKE EFFECT INSIDE THE ACTUAL CHRONO-COMPONENT, SO IT'S NOT POSSIBLE TO CHANGE THE CHRONO-COMPONENT BASE COLORS WITH TAILWINDCSS.

I'VE USED NEUTRAL COLOR THEMES FOR BASE CHRONO COMPONENT, SO THAT IT DOESN'T ODD OUT ON BOTH DARK AND LIGHT THEMES.
*/

import React from "react";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Chrono } from "react-chrono";
import Eventdata from "./api/event_data";

const Event = () => {
  const [Event] = useState(Eventdata);
  // theme check
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };
  const [mounted, setMounted] = useState(false);
  const { theme } = useTheme();

  // When mounted on client, now we can show the UI
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;
  return (
    <div className="wrapper">
      <h1 className="text-4xl font-sans text-center dark:text-white font-semibold mb-10">
        Events in GSSoC&apos;22
      </h1>
      <div className="w-full">
        {theme === "dark" ? (
          <Chrono
            items={Eventdata}
            theme={{
              primary: "#f67621",
              secondary: "#f67621",
              cardBgColor: "#474747",
              cardForeColor: "white",
              titleColor: "white",
            }}
            hideControls="true"
            // cardHeight={250}
            mode="VERTICAL_ALTERNATING"
            cardHeight={350}
            // scrollable={{ scrollbar: false }}
          >
            <div className="chrono-icons">
              <img
                src="https://img.icons8.com/android/344/twitter.png"
                alt="twitter"
              />
              <img
                src="https://img.icons8.com/android/344/twitter.png"
                alt="twitter"
              />
              <img
                src="https://img.icons8.com/material/344/start.png"
                alt="YouTube"
              />
              <img
                src="https://img.icons8.com/material/344/start.png"
                alt="YouTube"
              />
              <img
                src="https://img.icons8.com/android/344/twitter.png"
                alt="twitter"
              />
              {/* <img
              src="https://img.icons8.com/ios-filled/50/000000/mailbox-closed-flag-down.png"
              alt="mail-box"
            />
            <img
              src="https://img.icons8.com/ios-filled/50/000000/pinterest.png"
              alt="pinterest"
            />
            <img
              src="https://img.icons8.com/ios-filled/100/000000/reddit.png"
              alt="reddit"
            /> */}
            </div>
            {Event.map((curEvent, i) => {
              return (
                <div className="wrapper font-sans" key={i}>
                  {curEvent.fmt === "video" ? (
                    <iframe
                      width="600"
                      height="350"
                      src={curEvent.poster}
                      title="YouTube video player"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  ) : (
                    <img width="600"
                    height="350" src={curEvent.poster} alt="poster" />
                  )}
                  <br/>
                  <figcaption className="text-white text-2xl font-bold font-sans">
                    {curEvent.maintitle}
                  </figcaption>
                  <div>
                    <p className="text-white text-md">{curEvent.info}</p>
                  </div>
                  <div>
                    <a
                      className="text-orange-400 text-lg font-semibold hover:text-white"
                      href={curEvent.rec_link}
                    >
                      Link here »
                    </a>
                  </div>
                </div>
              );
            })}
          </Chrono>
        ) : (
          <Chrono
            items={Eventdata}
            theme={{
              primary: "#f67621",
              secondary: "#f67621",
              cardBgColor: "#f67621",
              cardForeColor: "white",
              titleColor: "white",
            }}
            hideControls="true"
            // cardHeight={250}
            mode="VERTICAL_ALTERNATING"
            cardHeight={350}
            // scrollable={{ scrollbar: false }}
          >
            <div className="chrono-icons">
              <img
                src="https://img.icons8.com/android/344/twitter.png"
                alt="twitter"
              />
              <img
                src="https://img.icons8.com/android/344/twitter.png"
                alt="twitter"
              />
              <img
                src="https://img.icons8.com/material/344/start.png"
                alt="YouTube"
              />
              <img
                src="https://img.icons8.com/material/344/start.png"
                alt="YouTube"
              />
              <img
                src="https://img.icons8.com/android/344/twitter.png"
                alt="twitter"
              />
              {/* <img
              src="https://img.icons8.com/ios-filled/50/000000/mailbox-closed-flag-down.png"
              alt="mail-box"
            />
            <img
              src="https://img.icons8.com/ios-filled/50/000000/pinterest.png"
              alt="pinterest"
            />
            <img
              src="https://img.icons8.com/ios-filled/100/000000/reddit.png"
              alt="reddit"
            /> */}
            </div>
            {Event.map((curEvent, i) => {
              return (
                <div className="wrapper font-sans" key={i}>
                  {curEvent.fmt === "video" ? (
                    <iframe
                      width="600"
                      height="350"
                      src={curEvent.poster}
                      title="YouTube video player"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  ) : (
                    <img width="600"
                    height="350" src={curEvent.poster} alt="poster" />
                  )}
                  <br/>
                  <figcaption className="text-2xl font-semibold">
                    {curEvent.maintitle}
                  </figcaption>
                  <div>
                    <p className="text-white text-md font-semibold">{curEvent.info}</p>
                  </div>
                  <div>
                    <a
                      className="text-black text-lg font-semibold hover:text-white"
                      href={curEvent.rec_link}
                    >
                      Link here »
                    </a>
                  </div>
                </div>
              );
            })}
          </Chrono>
        )}
      </div>
    </div>
  );
};

export default Event;
