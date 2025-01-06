"use client";
import React from "react";
import Card from "../components/card";
import Wrapper from "../components/wrapper";
import CopyRights from "../components/rights";
import { expertiseList } from "../consts/card.conts";

function Startup() {
  return (
    <Wrapper>
      <div className=" bg-slate-50 dark:bg-[#111111] rounded-xl mb-14">
        <div className="pt-16 px-12 mt-8">
          <div>
            <h2 className="text-4xl text-slate-900 font-roboto-slab dark:text-slate-50 font-bold relative after:contents[] after:w-36 after:h-[2px] after:bg-primary after:absolute after:top-1/2 -translate-y-1/2 after:right-8 after:left-52">
              About Me
            </h2>
            <p className="text-gray-700 dark:text-slate-500 leading-7 font-medium">
              I am a Senior Software Developer and majorly develop scalable web
              and mobile applications, with experience in Next.js, React, Redux,
              and Flutter. Quite familiar with Single Page Application
              Development along with Cross-platform Application Development, I
              chiefly work on high-performance user-centric products. My
              experience spreads to areas like banking, automobile, and
              government projects such as airports and real estate platforms.{" "}
            </p>
            <p className="text-gray-700 dark:text-slate-500 leading-7 font-medium mt-1">
              Offering customer support for product-related issues.
            </p>

            <h3 className="text-4xl text-slate-900 dark:text-slate-50 font-semibold pt-6 pb-4">
              What I do!
            </h3>
          </div>
          <div className="grid gap-8 grid-cols-1 md:grid-cols-2 xl:grid-cols-2">
            {expertiseList.map((expertise, index) => (
              <Card
                title={expertise.title}
                description={expertise.description}
                icon={expertise.icon}
                key={index}
              />
            ))}
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
