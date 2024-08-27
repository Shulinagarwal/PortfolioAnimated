import React from 'react'
import { CanvasRevealEffect } from './ui/CanvasReveal';
import { AnimatePresence, motion } from 'framer-motion';
import { SparklesCore } from './ui/Sparkles';
import { SiThealgorithms } from 'react-icons/si';
import { IconApps } from '@tabler/icons-react';
import { GiAbstract031 } from 'react-icons/gi';

const Approach = () => {
  return (

    <>

<h1 className="md:text-5xl text-xl lg:text-7xl font-bold text-center text-white relative z-20 mt-20">
        Approach
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

    <section className='w-full py-8'>
    


     <div className="py-20 flex flex-col lg:flex-row items-center justify-center bg-white dark:bg-black w-full gap-4 mx-auto px-8">
    <Card title="Planning and Strategy"
     icon={<GiAbstract031 className="h-24 w-24 text-white"/>}
     description="In my approach to every project, I place a strong emphasis on detailed planning and strategic thinking. I begin by thoroughly understanding the project&apos;s objectives, target audience, and unique requirements. From there, I develop a clear roadmap that outlines the necessary steps, resources, and timelines to achieve the desired outcomes."

     >
      <CanvasRevealEffect
        animationSpeed={5.1}
        containerClassName="bg-emerald-900"
      />
    </Card>
    <Card title="Development and Progress"
     icon={<IconApps stroke={2} className="h-24 w-24 text-white"/>}
     description='Throughout the development phase, I translate ideas and strategies into functional, high-quality solutions. My development process is rooted in best practices, clean code, and a commitment to continuous improvement. I use a combination of cutting-edge tools, frameworks, and methodologies to ensure that each project is both robust and scalable.'
     >
      <CanvasRevealEffect
        animationSpeed={3}
        containerClassName="bg-black"
        colors={[
          [236, 72, 153],
          [232, 121, 249],
        ]}
        dotSize={2}
      />
      {/* Radial gradient for the cute fade */}
      <div className="absolute inset-0 [mask-image:radial-gradient(400px_at_center,white,transparent)] bg-black/50 dark:bg-black/90" />
    </Card>
    <Card title="Problem-Solving and DSA"
     icon={<SiThealgorithms className="h-24 w-24 text-white"/>}
        description='Problem-solving lies at the core of my development philosophy. With a strong foundation in Data Structures and Algorithms (DSA), I approach challenges with a methodical and analytical mindset. I believe that understanding and applying the right algorithms is key to crafting efficient and optimized solutions.

My experience spans a wide range of problems, from simple coding tasks to complex algorithmic challenges. Whether its optimizing search and sorting algorithms, managing memory efficiently, or designing scalable systems, I leverage my DSA knowledge to build solutions that are both performant and reliable.'
>
      <CanvasRevealEffect
        animationSpeed={3}
        containerClassName="bg-sky-600"
        colors={[[125, 211, 252]]}
      />
    </Card>
  </div>

</section>

</>
);
}

const Card = ({
title,
icon,
children,
description,
}: {
title: string;
icon: React.ReactNode;
children?: React.ReactNode;
description:string,
}) => {
const [hovered, setHovered] = React.useState(false);
return (
<div
  onMouseEnter={() => setHovered(true)}
  onMouseLeave={() => setHovered(false)}
  className="border border-black/[0.2] group/canvas-card flex items-center justify-center dark:border-white/[0.2]  max-w-sm w-full mx-auto p-4 relative lg:h-[35rem] rounded-3xl "
>
  <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
  <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
  <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
  <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />

  <AnimatePresence>
    {hovered && (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="h-full w-full absolute inset-0"
      >
        {children}
      </motion.div>
    )}
  </AnimatePresence>

  <div className="relative z-20">
    <div className="text-center group-hover/canvas-card:-translate-y-4 absolute top-[50%] left-[50%] translate-x-[-50%] group-hover/canvas-card:opacity-0 transition duration-200 w-full  mx-auto flex items-center justify-center">
      {icon}
    </div>
    <h2 className="dark:text-white text-3xl opacity-0 group-hover/canvas-card:opacity-100 relative z-10 text-black mt-4  font-bold group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200 text-center">
      {title}
    </h2>
    <h2 className="dark:text-white text-xs opacity-0 group-hover/canvas-card:opacity-100 relative z-10 text-black mt-4  font-bold group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200 text-center">
      {description}
    </h2>
  </div>
</div>
);
};

const AceternityIcon = () => {
return (
<svg
  width="66"
  height="65"
  viewBox="0 0 66 65"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
  className="h-10 w-10 text-black dark:text-white group-hover/canvas-card:text-white "
>
  <path
    d="M8 8.05571C8 8.05571 54.9009 18.1782 57.8687 30.062C60.8365 41.9458 9.05432 57.4696 9.05432 57.4696"
    stroke="currentColor"
    strokeWidth="15"
    strokeMiterlimit="3.86874"
    strokeLinecap="round"
    style={{ mixBlendMode: "darken" }}
  />
</svg>
);
};

export const Icon = ({ className, ...rest }: any) => {
return (
<svg
  xmlns="http://www.w3.org/2000/svg"
  fill="none"
  viewBox="0 0 24 24"
  strokeWidth="1.5"
  stroke="currentColor"
  className={className}
  {...rest}
>
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
</svg>
  )
}

export default Approach
