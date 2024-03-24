import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HiDownload } from "react-icons/hi";
import hero from "../../assets/hero.png";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import Skills from "../skills/Skills";
import About from "../about/About";
import Projects from "../projects/Projects";
import Contact from "../contact_me/Contact";
import cv from "../../assets/MALACHI AFEN OKPLEYA.pdf";
import { RiMenu3Line } from "react-icons/ri";
import { MdClose } from "react-icons/md";

// import dev from "../../assets/Developer.png";

const Home = () => {
  const [open, setOpen] = useState<boolean>(false);
  // const aboutRef = useRef<HTMLElement>(null);
  // const skillsRef = useRef<HTMLElement>(null);
  // const projectsRef = useRef<HTMLElement>(null);
  // const contactRef = useRef<HTMLElement>(null);

  const socials = [
    {
      name: "X",
      icon: <FaSquareXTwitter />,
      link: "https://www.x.com/dev_kai_",
    },
    {
      name: "Instagram",
      icon: <FaInstagram />,
      link: "https://www.instagram.com/_afen_xx",
    },
    {
      name: "Github",
      icon: <FaGithub />,
      link: "https://www.github.com/malachi190",
    },
    {
      name: "linkedin",
      icon: <FaLinkedinIn />,
      link: "https://www.linkedin.com/in/malachi-okpleya",
    },
  ];

  const handleOpenNav = () => {
    setOpen(true);
  };

  const handleCloseNav = () => {
    setOpen(false);
  };

  return (
    <div className='w-full h-full m-0 p-0 flex flex-col justify-normal items-stretch gap-y-6'>
      {/* Header */}
      <header className='md:w-full w-auto flex md:justify-center justify-between items-center md:px-4 md:mx-2 py-2 relative top-0'>
        <div className='mx-6 p-2 relative left-0'>
          <Link to={"/"}>
            <h1 className='text-2xl font-[600] leading-10'>devfolio</h1>
          </Link>
        </div>
        <div className='flex-1 md:flex md:justify-center justify-between gap-10 items-center relative left-10 py-2 px-4 w-1/3 hidden'>
          <div className='mx-1 cursor-pointer'>About Me</div>
          <div className='mx-1 cursor-pointer'>Skills</div>
          <div className='mx-1 cursor-pointer'>Projects</div>
          <div className='mx-1 cursor-pointer'>Contact Me</div>
        </div>
        <div className=' p-2 mx-4 hidden md:block'>
          <a
            href={cv}
            download={"my resume"}
            className='bg-black text-white text-base font-normal px-8 py-2 flex items-center justify-center gap-2 rounded-sm'
          >
            <span>Resume</span>
            <span>
              <HiDownload />
            </span>
          </a>
        </div>
        <button
          className='md:hidden block text-3xl font-semibold mx-3'
          onClick={() => handleOpenNav()}
        >
          <RiMenu3Line />
        </button>
        {/* Responsive Navbar */}
        <div
          className={`absolute z-30 top-0 bottom-0 right-0 left-0 bg-black text-white ${
            open ? "w-full" : "w-0 hidden"
          } items-center flex justify-start gap-y-6 flex-col px-5 h-screen transition-all duration-300`}
        >
          <div className='p-0 w-full mt-6 mb-6 flex justify-between items-center'>
            <Link to={"/"}>
              <h1 className='text-2xl font-[600] leading-10'>devfolio</h1>
            </Link>
            <button
              className='font-semibold text-2xl text-white'
              onClick={() => handleCloseNav()}
            >
              <MdClose />
            </button>
          </div>
          <div className='mx-1 cursor-pointer w-full font-medium text-lg uppercase' onClick={() => handleCloseNav()}>
              About Me
          </div>
          <div className='mx-1 cursor-pointer w-full font-medium text-lg uppercase' onClick={() => handleCloseNav()}>
              Skills
          </div>
          <div className='mx-1 cursor-pointer w-full font-medium text-lg uppercase' onClick={() => handleCloseNav()}>
              Projects
          </div>
          <div className='mx-1 cursor-pointer w-full font-medium text-lg uppercase' onClick={() => handleCloseNav()}>
              Contact Me
          </div>
          <div className='mx-1 cursor-pointer self-start'>
            <a
              href={cv}
              download={"my resume"}
              className='bg-black border-white border-2 text-white text-base font-normal px-8 py-2 flex items-center justify-center gap-2 rounded-sm relative'
            >
              <span>Resume</span>
              <span>
                <HiDownload />
              </span>
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <div className='relative top-10'>
        <div className='flex-1 flex justify-center md:flex-row flex-col items-center md:gap-8 gap-3 px-8 py-3'>
          <div className='w-[80%] h-full md:hidden inline-flex self-start'>
            <img src={hero} alt='' className='w-full h-full' />
          </div>
          <div className='mx-3 md:w-1/2 w-full h-full p-2 relative top-0 flex flex-col justify-start items-center md:gap-y-6 gap-y-2'>
            <div className='flex justify-start flex-wrap items-start md:flex-row flex-col w-full'>
              <h1 className='md:text-[2.5rem] text-[1.25rem] font-medium leading-10 tracking-wider text-start'>
                Hello, I'm{" "}
                <span className='md:text-[2.5rem] text-[1.6rem] font-bold capitalize'>
                  Malachi Afen Okpleya
                </span>
                .
              </h1>
            </div>
            <div className='flex justify-start md:flex-row flex-col flex-wrap items-center w-full gap-x-4'>
              <span className='md:text-[2.5rem] text-[1.25rem] md:w-auto w-full font-medium leading-10 tracking-[5px] text-start'>
                Software
              </span>
              <span className='md:text-[2.5rem] text-[1.6rem] w-full text-start font-bold tracking-[13px]'>
                DEVELOPER
              </span>
            </div>
            <div className='flex justify-start md:flex-row flex-wrap flex-col items-center w-full md:gap-x-4 gap-x-2 mb-8'>
              <span className='md:text-[2.5rem] text-[1.25rem] w-full md:w-[40%] font-medium leading-10 tracking-[5px] text-start'>
                Based In
              </span>{" "}
              <span className='md:text-[2.5rem] text-[1.6rem] text-start w-full font-bold leading-10 tracking-[4px]'>
                Lagos, Nigeria
              </span>
            </div>
            <div className='p-0'>
              <p className='font-medium text-base'>
                Hi, I’m Malachi Okpleya, an experienced software developer with
                a passion for crafting efficient and scalable software
                applications. Proficient in multiple programming languages and
                frameworks, I specialize in full-stack development and have a
                keen interest in problem-solving. Committed to staying current
                with industry trends and continuously enhancing skills. Proven
                track record of delivering high-quality software within
                deadlines. Let's connect and explore opportunities to create
                impactful solutions together.
              </p>
            </div>

            <div className='mt-5 flex flex-1 justify-start items-center w-full py-3 gap-x-8'>
              {socials.map((social, index) => (
                <div
                  key={index}
                  className='border-2 border-black md:p-4 p-2 rounded-md'
                >
                  <Link to={`${social.link}`}>{social.icon}</Link>
                </div>
              ))}
            </div>
          </div>
          <div className='w-1/2 h-full md:block hidden'>
            <img src={hero} alt='' className='w-full h-full' />
          </div>
        </div>
      </div>
      {/* Skills Section */}
      <Skills />
      {/* About Section */}
      <About />
      {/* Projects Section */}
      <Projects />
      {/* Contact Section */}
      <Contact />
    </div>
  );
};

export default Home;
