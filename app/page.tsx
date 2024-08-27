"use client";

import About from "@/components/About";
import Approach from "@/components/Approach";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Social from "@/components/Social";
import { FloatingDock } from "@/components/ui/FloatingDock";
import { TracingBeam } from "@/components/ui/TracingBeam";

import { IconBrandGithub, IconBrandProducthunt, IconBrandX, IconExchange, IconHome, IconHttpConnect, IconNewSection, IconTerminal2 } from "@tabler/icons-react";

export default function Home() {
  const links = [
    {
      title: "Github",
      icon: (
        <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://github.com/Shulinagarwal",
    },
    {
      title: "Contact",
      icon: (
        <IconHttpConnect stroke={2} className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#Contact",
    },
    {
      title: "Social",
      icon: (
        <IconExchange className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#Social",
    },
    {
      title: "Projects",
      icon: (
        <IconBrandProducthunt stroke={2} className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#Projects",
    },
    {
      title: "Home",
      icon: (
        <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
  ];

  return (
    <div className="relative bg-black flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5 min-h-screen gap-10 ">
      <div className="fixed sm:top-1/2 sm:right-16 sm:transform sm:-translate-y-1/2 sm:translate-x-1/2 right-5 top-[90%] z-20">
        <FloatingDock items={links} />
      </div>
      
        <div className="max-w-screen-7xl w-full min-h-screen">
          <Hero />
         
        </div>
        <Projects /> {/* Add margin-bottom to Projects */}
        <Approach/>
      {/* <About  />   Add margin-top to About */}
        <Social/>
        <Footer/>
    </div>
  );
}
