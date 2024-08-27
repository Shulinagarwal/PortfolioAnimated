"use client";

import React from 'react'
import { Spotlight } from './ui/Spotlight'

import MagicButton from './ui/MagicButton'
import { FaLocationArrow } from 'react-icons/fa6'
import { TypewriterEffect, TypewriterEffectSmooth } from './ui/TypeWriter'

import Link from 'next/link';

const Hero = () => {

  
  
  const words = [
    {
      text: "Exploring",
    },
    {
      text: "Ideas",
      className: "text-blue-400 dark:text-blue-400",

    },
    {
      text: "and",
    },
    
    {
      text: "Sharing",
    },
    {
      text: "Stories.",
      className: "text-blue-400 dark:text-blue-400",
    },
    
  ];
  return (
  <div className='pb-20 pt-36 relative'>
       <div>
            <Spotlight className='-top-40 -left-10 md:-left-32 md:-top-20 h-screen' fill='white'/>
            <Spotlight className='top-10 left-full h-[80vh] w-[50vw]' fill='white'/>
            <Spotlight className='top-28 left-80 h-[80vh] w-[50vw]' fill='blue'/>

        </div>

        <div className="h-screen w-full dark:bg-black bg-white dark:bg-grid-white/[0.06] bg-grid-black/[0.2] flex items-center justify-center absolute top-0 left-0">
            {/* Radial gradient for the container to give a faded look */}
            <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]">
            </div>
          </div>
    <div className="flex justify-center relative my-20 z-10">
      <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
        <h2 className='uppercase tracking-widest text-xs text-center text-neutral-400 max-w-80'>
          Dynamic web magic with Next.js
        </h2>

        <TypewriterEffect words={words}
        className='mt-10' />
        <p className='text-center md:tracking-wider mt-10 text-sm md:text-md lg:text-lg text-neutral-400 '>
        I'm Shulin, a passionate Next.js developer with a deep understanding of Advanced Java, committed to crafting seamless and innovative web solutions.
        </p>
     
            <Link href='#Projects' className='mt-10' >
            <MagicButton title="Show My Work"
                icon={<FaLocationArrow />}
                position='right'
              />
            </Link>
      </div>
      </div>
  </div>  
  )
}

export default Hero