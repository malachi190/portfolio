import React from "react";
import selfImg from "../../assets/Group 1000015845.png";

// type Props = {}

const About = () => {
  return (
    <div className='relative top-[10rem] w-full h-full px-8'>
      <div className='p-[1px] bg-black max-w-full w-full rounded-lg mx-auto' />

      <div className='flex flex-1 justify-center md:flex-row flex-col items-center w-full mb-[6rem] px-6 relative top-10'>
        <div className='md:w-1/2 w-full h-full px-5 md:mb-0 mb-10'>
          <img src={selfImg} alt='' className='md:w-auto w-full h-full' />
        </div>
        <div className='md:w-1/2 w-full h-full text-start leading-10 flex flex-col gap-y-5'>
          <h1 className='text-3xl font-thin'>
            About <span className='font-semibold tracking-wider'>Me</span>
          </h1>
          <p>
            I'm a passionate, self-driven software developer specializing in
            React.js and PHP/Laravel. I thrive on bringing both the technical
            and functional aspects of digital products to life. Crafting
            seamless user experiences and writing clean, performant code are my
            top priorities. My journey in software development began in 2020, and
            since then, I've consistently pursued growth and embraced new
            challenges. Now in my mid twenties, five years into my development
            journey, I'm at the forefront of building cutting-edge web and mobile
            applications. I leverage modern technologies like Next.js,
            TypeScript, React.js & React Native, Tailwind CSS, Firebase, and more to create
            robust solutions. Outside of coding, I actively engage in
            professional development and networking opportunities, seeking to
            stay updated with industry trends and best practices.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
