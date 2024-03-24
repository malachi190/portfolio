import React, { useState, useEffect, useRef } from "react";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { Link } from "react-router-dom";
import emailJs from "@emailjs/browser";
// type Props = {}

const Contact = () => {
  useEffect(() => {
    emailJs.init("fQJ16_Vr0Iha1M2rU");
  }, []);
  const [loading, setLoading] = useState<boolean>(false);
  const nameRef = useRef() as React.MutableRefObject<HTMLInputElement>;
  const emailRef = useRef() as React.MutableRefObject<HTMLInputElement>;
  const messageRef = useRef() as React.MutableRefObject<HTMLTextAreaElement>;

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

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    const service_id = "service_9yd1svh";
    const template_id = "template_tp7x2i9";

    try {
      setLoading(true);
      await emailJs.send(service_id, template_id, {
        name: nameRef.current.value,
        email: emailRef.current.value,
        message: messageRef.current.value,
      });
      alert("Thank you for reaching out!");
      setLoading(false);
      nameRef.current.value = "";
      emailRef.current.value = "";
      messageRef.current.value = "";
    } catch (e) {
      console.log("error", e);
      setLoading(false);
    }
  };

  return (
    <div className='elative top-[10rem] w-full h-full py-[6rem] px-6'>
      <div className='relative top-10 mx-auto py-4'>
        <h1 className='text-3xl font-thin text-center p-5'>
          Contact <span className='font-bold tracking-wider'>Me</span>
        </h1>
      </div>

      <div className='flex flex-1 md:justify-between justify-center md:flex-row flex-col items-center px-16 py-4 relative top-10 w-full gap-x-10 md:gap-y-0 gap-y-8'>
        <div className='self-start md:mx-4 mx-0 md:w-1/2 w-full'>
          <form
            action=''
            className='md:flex flex-col items-start justify-start gap-y-5 w-full'
            onSubmit={handleSubmit}
          >
            <div className='mt-3'>
              <input
                type='text'
                name='name'
                placeholder='Your Name'
                ref={nameRef}
                className='outline-none border-2 border-black md:w-[500px] w-full rounded-sm py-2 px-4'
              />
            </div>
            <div className='mt-3'>
              <input
                type='text'
                name='email'
                placeholder='Email'
                ref={emailRef}
                className='outline-none border-2 border-black md:w-[500px] w-full rounded-sm py-2 px-4'
              />
            </div>
            <div className='mt-3'>
              <textarea
                name='email'
                placeholder='How can i help?'
                className='outline-none border-2 border-black md:w-[500px] w-full rounded-sm py-2 px-4'
                rows={8}
                cols={20}
                ref={messageRef}
              />
            </div>
            <div className='flex flex-auto md:flex-row flex-col items-center justify-center gap-x-6 w-full'>
              <div className='mt-3'>
                <button
                  className='bg-black text-white font-medium text-lg px-5 py-2 rounded-md w-[150px]'
                  disabled={loading}
                >
                  {loading ? "Sending..." : "Get In Touch"}
                </button>
              </div>
              <div className='mt-3 flex flex-1 justify-start items-center w-full py-3 gap-x-8 md:ml-12 ml-0'>
                {socials.map((social, index) => (
                  <div
                    key={index}
                    className='border-2 border-black p-3 rounded-md'
                  >
                    <Link to={`${social.link}`}>{social.icon}</Link>
                  </div>
                ))}
              </div>
            </div>
          </form>
        </div>

        <div className='md:p-2 flex flex-col w-full h-full'>
          <div className='self-start relative top-0 mb-10'>
            <h1 className='font-bold text-[2rem]'>Let's Create</h1>
            <h1 className='font-bold text-[3rem]'>Something Special</h1>
          </div>
          <div className='text-start'>
            <p className='text-[1.2rem] font-medium'>
              malachiokpleya@gmail.com
            </p>
            <p className='text-[1.2rem] font-medium'>
              (+234) 07041949078 / 09079636798
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
