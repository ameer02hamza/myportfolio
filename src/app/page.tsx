"use client";
import React from "react";
import {
  FaAddressBook,
  FaBarsProgress,
  FaBlogger,
  FaCalendarDays,
  FaDownload,
  FaDribbble,
  FaEnvelopeOpenText,
  FaFacebookF,
  FaFileLines,
  FaHive,
  FaHouse,
  FaHouseChimney,
  FaLinkedin,
  FaLocationDot,
  FaMobileScreen,
  FaTwitter,
} from "react-icons/fa6";
import Header from "./components/header";
import MobileNav from "./components/nmbl-nav";
import Profile from "./components/profile";
import NavBar from "./components/nav";
import Card from "./components/card";
import Wrapper from "./components/wrapper";
import CopyRights from "./components/rights";

function Startup() {
  return (
    <Wrapper >
       <div className=" bg-slate-50 dark:bg-[#111111] rounded-xl mb-14">
                  <div className="pt-16 px-12 mt-8">
                    <div>
                      <h2 className="text-4xl text-slate-900 font-roboto-slab dark:text-slate-50 font-bold relative after:contents[] after:w-36 after:h-[2px] after:bg-primary after:absolute after:top-1/2 -translate-y-1/2 after:right-8 after:left-52">
                        About Me
                      </h2>
                      <p className="text-gray-700 dark:text-slate-500 leading-7 font-medium">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil sequi, unde laudantium inventore perspiciatis officia minima et facilis eaque id nobis consequuntur, dolor delectus laboriosam? Quibusdam repudiandae culpa molestias excepturi.
                      </p>
                      <p className="text-gray-700 dark:text-slate-500 leading-7 font-medium mt-3">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel voluptatem delectus harum dignissimos? Aliquid veniam, nobis soluta expedita perferendis officiis reprehenderit, natus quisquam et culpa optio laboriosam placeat eligendi sint.
                      </p>
  
                      <h3 className="text-4xl text-slate-900 dark:text-slate-50 font-semibold pt-6 pb-4">
                        What I do!
                      </h3>
                    </div>
                    <div className="grid gap-8 grid-cols-1 md:grid-cols-2 xl:grid-cols-2">
                 {
                  Array.from({ length: 6 }).map((_, i) => (
                    <Card title="" description="" icon="" key={i} />
                  ))
                 }
                   
                    </div>
                    {/* <div>
                      <h3 className="text-4xl text-slate-900 dark:text-slate-50 font-semibold pt-6 pb-4">
                        My Client!
                      </h3>
                      <div className="brand_slider py-6 px-6 rounded-xl dark:bg-slate-800 flex justify-between">
                        <div className="slide_item py-4 px-8 rounded-md">
                          <img src="/images/slide-item-1.png" alt="image" />
                        </div>
                        <div className="slide_item py-4 px-8 rounded-md">
                          <img src="/images/slide-item-2.png" alt="image" />
                        </div>
                        <div className="slide_item py-4 px-8 rounded-md">
                          <img src="/images/slide-item-3.png" alt="image" />
                        </div>
                        <div className="slide_item py-4 px-8 rounded-md">
                          <img src="/images/slide-item-4.png" alt="image" />
                        </div>
                        <div className="slide_item py-4 px-8 rounded-md">
                          <img src="/images/slide-item-1.png" alt="image" />
                        </div>
                        <div className="slide_item py-4 px-8 rounded-md">
                          <img src="/images/slide-item-2.png" alt="image" />
                        </div>
                      </div>
                    </div> */}
                  </div>
                  <CopyRights />
                </div>
    </Wrapper>
  );
}

export default Startup;
