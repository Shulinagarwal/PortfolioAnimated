import React from 'react'
import { FocusCards } from './ui/Focus';
import { SparklesCore } from './ui/Sparkles';

const Projects = () => {
    const cards = [
        {
          title: "First Project",
          src: "/p1.png.jpg",
          link:"https://shulinportfolio.netlify.app/",
        },
        {
          title: "Solar System",
          src: "/p2.png",
          link: "https://solar2.vercel.app/",
        },
        {
          title: "Tic-Tac-Toe",
          src: "/p3.png",
          link:"https://tic-tac-toe-using-html-css-javascript-tan.vercel.app/",
        },
        
      ];
     
     
  return (
    <>
     <div id="Projects" className="min-h-screen w-full flex  flex-col items-center justify-center gap-16 ">
     <h1 className="md:text-5xl text-xl lg:text-7xl font-bold text-center text-white relative z-20">
        Projects
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
            <FocusCards cards={cards} />

            
     </div>
  </>
  )
}

export default Projects