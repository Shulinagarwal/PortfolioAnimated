"use client";
import React, { useEffect, useState } from "react";
import { PinContainer } from "./ui/PinContainer";
import { SparklesCore } from "./ui/Sparkles";


const About = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div id="Social" className="min-h-screen w-full flex  flex-col items-center justify-center gap-10">


<h1 className="md:text-5xl text-xl lg:text-7xl font-bold text-center text-white relative z-20">
        Social
      </h1>
      <div className="w-[40rem] h-40 relative">
        {/* Gradients */}
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />
 
        {/* Core component */}
        <SparklesCore
          background="transparent"
          minSize={0.4}
          maxSize={1}
          particleDensity={1200}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
 
        {/* Radial Gradient to prevent sharp edges */}
        <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
      </div>
      {isClient ? (
        <div className="flex flex-wrap gap-10 justify-center">
          <PinContainer
            title="My LeetCode Id"
            href="https://leetcode.com/u/Trizalshulin/"
          >
            <div className="flex flex-col p-4  tracking-tight text-slate-100/50 w-[15rem] h-[15rem] md:w-[20rem] md:h-[20rem]">
              <h3 className="max-w-xs  pb-2 m-0 font-bold text-base text-neutral-200 text-center">
                LeetCode
              </h3>
              <div className="flex flex-1 w-full rounded-lg mt-4 ">
              <img
                    src="https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png"
                    alt="LeetCode Logo"
                    className="object-contain w-full h-full"
                  />
                </div>
            </div>
          </PinContainer>

          <PinContainer
            title="My LinkedIn"
            href="https://www.linkedin.com/in/shulinagarwal/"
          >
            <div className="flex flex-col p-4 tracking-tight text-slate-100/50 w-[15rem] h-[15rem] md:w-[20rem] md:h-[20rem]">
              <h3 className="max-w-xs pb-2 m-0 font-bold text-base text-neutral-200 text-center">
                LinkedIn
              </h3>
              <div className="flex flex-1 w-full rounded-lg mt-4 ">
              <img
                  width="480" height="480" src="https://img.icons8.com/color/480/linkedin.png"                     alt="LinkedIn Logo"
                    className="object-contain w-full h-full"
                  />
                </div>
                </div>
          </PinContainer>
        </div>
      ) : (
        <h1></h1>
      )}
    </div>
  );
};

export default About;