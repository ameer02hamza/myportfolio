import React from "react";

import {
  FaLinkedin,
  FaMobileScreen,
  FaLocationDot,
  FaEnvelopeOpenText,
  FaCalendarDays,
  FaDownload,
  FaGithub,
  FaInstagram,
} from "react-icons/fa6";

function Profile() {
  return (
    <div className=" col-span-12 lg:col-span-4">
      <div className="bg-slate-100 dark:bg-[rgb(17,17,17)] rounded-2xl mt-10 lg:mb-10 py-10 md:sticky top-40 left-0">
        <div className="overflow-hidden rounded-lg -mt-48 text-center w-60 h-60 m-auto">
          <img src="/images/myprofile.jpg" alt="Profile image"  />
        </div>
        <div className="text-center">
          <h2 className="mt-6 mb-1 text-4xl font-semibold dark:text-white">
            Ameer Hamza
          </h2>
          <h1 className="mb-4 text-[#7B7B7B] inline-block dark:bg-[#1D1D1D] px-5 py-1.5 rounded-lg dark:text-[#A6A6A6]">
            Software Developer
          </h1>
        </div>
        <div className="flex justify-center space-x-3">
          <a
            href="https://www.linkedin.com/in/ameer-hamza-549420184?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            target="_blank" rel="noreferrer"
            className="w-10 h-10 rounded bg-light-gray flex items-center 
            justify-center shadow-md dark:bg-slate-800 hover:hover_active text-[#1773EA] hover:text-slate-50"
          >
         <FaLinkedin size={25} />{" "}
          </a>
          <a
            href="https://github.com/ameer02hamza/"
            className="w-10 h-10 rounded bg-light-gray flex items-center justify-center shadow-md dark:bg-slate-800 hover:hover_active text-slate-800 hover:text-slate-50"
          target="_blank" rel="noreferrer"
          >
             <FaGithub  size={25} className="text-slate-800 dark:text-white" />{" "}
          </a>
          <a
            href="https://www.instagram.com/ameer2hamza/?igsh=NWZsYW84dmMzZHZz"
            className="w-10 h-10 rounded bg-light-gray flex items-center justify-center shadow-md dark:bg-slate-800 hover:hover_active text-[#e14a84] hover:text-slate-50"
         target="_blank" rel="noreferrer"
         >
            <FaInstagram size={25} />{" "}
          </a>
        </div>
        <ul className="flex flex-col bg-light-gray dark:bg-slate-800 px-7 py-8 rounded-2xl mt-10">
          <li className="flex items-center gap-6 border-b border-slate-300 py-3">
            <div className="w-10 h-10 rounded bg-light-gray flex items-center justify-center shadow-md dark:bg-[#111111] hover:hover_active group cursor-pointer">
              <FaMobileScreen className="text-pink-600 text-2xl group-hover:text-slate-50" />
            </div>
            <div className="flex flex-col dark:text-white">
              <span className="text-slate-500 text-xs font-bold">Phone</span>
              <a
                className="transition-all duration-100 hover:text-primary"
                href={`tel:${process.env.NEXT_PUBLIC_PHONE_NUMBER}`}
              >
                {process.env.NEXT_PUBLIC_PHONE_NUMBER}
                <br />
                {process.env.NEXT_PUBLIC_TEMP_PHONE_NUMBER}
              </a>
            </div>
          </li>
          <li className="flex items-center gap-6 border-b border-slate-300 py-3">
            <div className="w-10 h-10 rounded bg-light-gray flex items-center justify-center shadow-md dark:bg-black text-[#6AB5B9] hover:hover_active group cursor-pointer text-xl">
              <FaLocationDot />
            </div>
            <div className="flex flex-col dark:text-white">
              <span className="text-slate-500 text-xs font-bold">Location</span>
              <span className="transition-all duration-100">
                {process.env.NEXT_PUBLIC_ADDRESS}
              </span>
            </div>
          </li>
          <li className="flex items-center gap-6 border-b border-slate-300 py-3">
            <div className="w-10 h-10 rounded bg-light-gray flex items-center justify-center shadow-md dark:bg-black text-[#FD7590] hover:hover_active group cursor-pointer text-xl">
              <FaEnvelopeOpenText />
            </div>
            <div className="flex flex-col dark:text-white">
              <span className="text-slate-500 text-xs font-bold">Email</span>
              <a
                className="transition-all duration-100 hover:text-primary"
                href={process.env.NEXT_PUBLIC_EMAIL}
              >
                {process.env.NEXT_PUBLIC_EMAIL}
              </a>
            </div>
          </li>
          <li className="flex items-center gap-6 py-3">
            <div className="w-10 h-10 rounded bg-light-gray flex items-center justify-center shadow-md dark:bg-black text-[#C17CEB] hover:hover_active group cursor-pointer text-xl">
              <FaCalendarDays />
            </div>
            <div className="flex flex-col dark:text-white">
              <span className="text-slate-500 text-xs font-bold">Birthday</span>
              <span className="transition-all duration-100 ">
                {process.env.NEXT_PUBLIC_BIRTHDAY}
              </span>
            </div>
          </li>
        </ul>
        <div className="text-center mt-10">
          <a
            href="/images/cv.pdf"
            className="inline-flex justify-center items-center rounded-[60px] bg-gradient-to-r from-[#FA5252] to-[#DD2476] py-3 px-6 text-slate-50"
          >
            <FaDownload className="mx-2" />
            Download CV
          </a>
        </div>
      </div>
    </div>
  );
}

export default Profile;
