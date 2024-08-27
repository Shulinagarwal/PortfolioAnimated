import React from 'react';
import MagicButton from './ui/MagicButton';
import { FaLocationArrow } from 'react-icons/fa6';

const Footer = () => {
  return (
    <footer className='w-full pb-10 relative' id='Contact'>
      <div className='w-full min-h-96 relative'>
        <img 
          src="/footer-grid.svg" 
          alt="grid" 
          className='w-full h-full opacity-100 object-cover'
        />
        
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-10 px-4">
          <h1 className='text-2xl md:text-4xl lg:text-6xl max-w-full lg:max-w-[45vw] text-white'>
            Thank you for visiting my portfolio!
          </h1>
          <p className='text-center w-full md:w-[75%] lg:w-[50%] mt-4 md:mt-6 lg:mt-9 text-white text-base md:text-lg lg:text-xl font-extralight'>
            I&apos;m passionate about bringing ideas to life through code and design. If you&apos;re ready to elevate your digital presence or have a project in mind, I&apos;d love to hear from you. This footer serves as a gateway for you to connect with me—whether it&apos;s to discuss potential collaborations, share feedback, or just say hello.

            You&apos;ll find all the essential links to my social profiles and contact information here. I&apos;m always open to new opportunities and eager to contribute to exciting projects. Let&apos;s create something amazing together!
          </p>

          <a href="mailto:shulinagarwal22@gmaikl.com" className="mt-6 md:mt-8 lg:mt-10">
            <MagicButton
              title="Let's get in touch"
              icon={<FaLocationArrow />}
              position='right'
            />
          </a>
        </div>

        {/* Added a new container for the footer's bottom section */}
        <div className='absolute bottom-0 left-0 w-full px-4 py-6 bg-black bg-opacity-50'>
          <div className='flex flex-col md:flex-row justify-between items-center text-center'>
            <p className='font-extralight md:text-base text-sm text-white'>
              Copyright © 2024 Shulin
            </p>
            {/* Uncomment and adjust as needed for social media links */}
            {/* <div className='flex mt-4 md:mt-0 md:gap-3 gap-6'>
              {socialMedia.map((profile) => (
                <div key={profile.id}>
                  <img src={profile.img} alt={profile.id} width={20} height={20} />
                </div>
              ))}
            </div> */}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
