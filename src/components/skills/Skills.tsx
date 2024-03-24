import React from "react";
import { IoLogoJavascript } from "react-icons/io5";
import { FaCss3 } from "react-icons/fa6";
import { FaReact } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { FaPhp } from "react-icons/fa6";
import { FaLaravel } from "react-icons/fa6";
import { GrMysql } from "react-icons/gr";
import { TbBrandNextjs } from "react-icons/tb";
import { BiLogoTypescript } from "react-icons/bi";
import { FaAws } from "react-icons/fa6";
import { TbBrandReactNative } from "react-icons/tb";
import { SiRedis } from "react-icons/si";

const Skills = () => {
  const skills = [
    {
      skillName: "Javascript",
      logo: <IoLogoJavascript />,
    },
    {
      skillName: "TypeScript",
      logo: <BiLogoTypescript />,
    },
    {
      skillName: "Css/Scss",
      logo: <FaCss3 />,
    },
    {
      skillName: "React",
      logo: <FaReact />,
    },
    {
      skillName: "GIT",
      logo: <FaGithub />,
    },
    {
      skillName: "PHP",
      logo: <FaPhp />,
    },
    {
      skillName: "Laravel",
      logo: <FaLaravel />,
    },
    {
      skillName: "MySQL",
      logo: <GrMysql />,
    },
    {
      skillName: "NextJs",
      logo: <TbBrandNextjs />,
    },
    {
      skillName: "AWS",
      logo: <FaAws />,
    },
    {
      skillName: "React Native",
      logo: <TbBrandReactNative />,
    },
    {
      skillName: "Redis",
      logo: <SiRedis />,
    },
  ];
  return (
    <div className='relative top-[5rem] w-full h-full px-4'>
      <div className='p-[1px] bg-black max-w-full w-full rounded-lg mx-auto' />

      <div className='flex flex-col justify-center items-center w-full h-full mb-[6rem]'>
        <div className='relative top-10 mx-auto'>
          <h1 className='text-3xl font-thin'>
            My <span className='font-bold tracking-wider'>Skills</span>
          </h1>
        </div>
        <div className='grid md:grid-cols-4 grid-cols-3 justify-between items-center gap-10 relative top-[8rem] w-full'>
          {skills.map((skill, index) => (
            <div
              className='p-5 m-auto flex flex-col justify-center items-center gap-y-3 border-2 border-black rounded-sm text-center md:w-[200px] w-full h-[100px] md:h-[150px]'
              key={index}
            >
              <span className='text-3xl'>{skill.logo}</span>
              <span className='font-medium'>{skill.skillName}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
