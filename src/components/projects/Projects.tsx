import React from "react";
import { TbExternalLink } from "react-icons/tb";
import { Link } from "react-router-dom";
import trendteon from "../../assets/trendteon.jpeg";
import newsteon from "../../assets/newsteon.jpeg";
import surveyteon from "../../assets/survey.jpeg";
import pollteon from "../../assets/poll.jpeg";
import tracker from '../../assets/tracker.jpeg'

// type Props = {}

const Projects = () => {
  return (
    <div className='relative top-[10rem] w-full h-full py-[6rem] px-6 bg-black text-white'>
      <div className='relative top-0 mx-auto py-4'>
        <h1 className='text-3xl font-thin text-white text-center p-5'>
          My <span className='font-bold tracking-wider'>Projects</span>
        </h1>
      </div>

      <div className='w-full flex flex-col justify-center items-center px-10 md:gap-[5rem] gap-[7rem]'>
        <div className='flex flex-auto md:flex-row flex-col justify-center items-center mx-auto gap-x-10 px-5 w-full relative top-[4rem]'>
          <div className='self-start px-6 md:w-1/2 w-full md:mb-0 mb-8'>
            <Link to={"https://www.trendteon.com/"}>
              <img
                src={trendteon}
                alt=''
                className='w-full h-full rounded-md'
              />
            </Link>
          </div>
          <div className='px-6 md:w-1/2 w-full justify-start items-start gap-y-5 flex flex-1 flex-col'>
            <h1 className='text-[3.5rem] font-bold'>01</h1>
            <h1 className='text-[2rem] font-bold tracking-widest capitalize'>
              TrendTeon
            </h1>
            <p className='font-medium text-lg'>
              Trendteon serves as a campaign aggregation platform that
              facilitates direct interaction between brands and influencers.
              This allows brands to connect with influencers for campaign
              engagement, providing seamless access for both parties.
              <br />
              Built with React, Styled Components & React Suite UI components.
            </p>
            <div className='mt-5'>
              <Link to={"https://www.trendteon.com/"} className='text-2xl'>
                <TbExternalLink />
              </Link>
            </div>
          </div>
        </div>

        <div className='flex flex-auto md:flex-row flex-col justify-center items-center mx-auto gap-x-10 px-5 w-full relative top-[4rem]'>
          <div className='self-start px-6 md:w-1/2 w-full md:mb-0 mb-8'>
            <Link to={"https://www.precisetracker.com/"}>
              <img
                src={tracker}
                alt=''
                className='w-full h-full rounded-md'
              />
            </Link>
          </div>
          <div className='px-6 md:w-1/2 w-full justify-start items-start gap-y-5 flex flex-1 flex-col'>
            <h1 className='text-[3.5rem] font-bold'>02</h1>
            <h1 className='text-[2rem] font-bold tracking-widest capitalize'>
              Precise Tracker
            </h1>
            <p className='font-medium text-lg'>
              Precise Tracker serves as an in house tool for tracking and monitoring campaign activities on across the web,
              this web app crawls the internet for mentions of certain keywords on campaign projects using machine learning models
              and connected to the app through an external API.
              <br />
              Built with Laravel, TailwindCss & MySQL DBMS.
            </p>
            <div className='mt-5'>
              <Link to={"https://www.precisetracker.com/"} className='text-2xl'>
                <TbExternalLink />
              </Link>
            </div>
          </div>
        </div>

        <div className='flex flex-auto md:flex-row flex-col justify-center items-center mx-auto gap-x-10 px-5 w-full relative top-[4rem]'>
          <div className='self-start px-6 md:w-1/2 w-full md:mb-0 mb-8 md:hidden'>
            <Link to={"https://www.pollteon.com/"}>
              <img src={pollteon} alt='' className='w-full h-full rounded-md' />
            </Link>
          </div>
          <div className='px-6 md:w-1/2 w-full justify-start items-start gap-y-5 flex flex-1 flex-col'>
            <h1 className='text-[3.5rem] font-bold'>03</h1>
            <h1 className='text-[2rem] font-bold tracking-widest capitalize'>
              PollTeon
            </h1>
            <p className='font-medium text-lg'>
              PollTeon is a comprehensive platform designed for opinion
              collection and insightful analysis. <br />
              It empowers every pollster by offering descriptive statistics and
              facilitating seamless sharing of their polls with others.
              <br />
              Built with React and Node.js.
            </p>
            <div className='mt-5'>
              <Link to={"https://www.pollteon.com/"} className='text-2xl'>
                <TbExternalLink />
              </Link>
            </div>
          </div>
          <div className='self-start px-6 md:w-1/2 w-full md:mt-0 mt-8 md:block hidden'>
            <Link to={"https://www.pollteon.com/"}>
              <img src={pollteon} alt='' className='w-full h-full rounded-md' />
            </Link>
          </div>
        </div>

        <div className='flex flex-auto md:flex-row flex-col justify-center items-center mx-auto gap-x-10 px-5 w-full relative top-[4rem]'>
          <div className='self-start px-6 md:w-1/2 w-full md:mb-0 mb-8'>
            <Link to={"https://www.newsteon.com/"}>
              <img src={newsteon} alt='' className='w-full h-full rounded-md' />
            </Link>
          </div>
          <div className='px-6 md:w-1/2 w-full justify-start items-start gap-y-5 flex flex-1 flex-col'>
            <h1 className='text-[3.5rem] font-bold'>04</h1>
            <h1 className='text-[2rem] font-bold tracking-widest capitalize'>
              NewsTeon
            </h1>
            <p className='font-medium text-lg'>
              NewsTeon is a platform where writers and brands can interact and
              manage their campaigns. Brands and Media Houses and Agents are
              able to connect with each other on a campaign, providing a
              seamless flow of the campaign process. <br />
              Built with NextJs and ShadCn UI Components.
            </p>
            <div className='mt-5'>
              <Link to={"https://www.newsteon.com/"} className='text-2xl'>
                <TbExternalLink />
              </Link>
            </div>
          </div>
        </div>

        <div className='flex flex-auto md:flex-row flex-col justify-center items-center mx-auto md:gap-y-0 gap-y-8 gap-x-10 px-5 w-full relative top-[4rem]'>
          <div className='self-start px-6 md:w-1/2 w-full block md:hidden'>
            <Link to={"https://www.surveyteon.com/"}>
              <img
                src={surveyteon}
                alt=''
                className='w-full h-full rounded-md'
              />
            </Link>
          </div>
          <div className='px-6 md:w-1/2 w-full justify-start items-start gap-y-5 flex flex-1 flex-col'>
            <h1 className='text-[3.5rem] font-bold'>05</h1>
            <h1 className='text-[2rem] font-bold tracking-widest capitalize'>
              SurveyTeon
            </h1>
            <p className='font-medium text-lg'>
              Surveyteon is a platform that empowers registered researchers to
              craft surveys and extract valuable insights. Leveraging the
              proprietary survey designer tool, users can create surveys
              featuring diverse question types and derive meaningful insights
              from the obtained results. <br />
              Built with React, Styled Components & React Suite UI components.
            </p>
            <div className='mt-5'>
              <Link to={"https://www.surveyteon.com/"} className='text-2xl'>
                <TbExternalLink />
              </Link>
            </div>
          </div>
          <div className='self-start px-6 w-1/2 md:block hidden'>
            <Link to={"https://www.surveyteon.com/"}>
              <img
                src={surveyteon}
                alt=''
                className='w-full h-full rounded-md'
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
