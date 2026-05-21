import React from "react";
import Wrapper from "../../components/wrapper";
import CopyRights from "../../components/rights";
import ResumeCard from "../../components/resume-card";
import { FaGraduationCap, FaLaptopCode } from "react-icons/fa6";
import {
  educationList,
  knowledgeList,
  skillLists,
  workExperienceList,
} from "@/consts/card.conts";
import SkillIndicator from "@/components/skill-indicator";

function Resume() {
  return (
    <Wrapper>
      <div className="  bg-slate-50 dark:bg-[#111111] rounded-xl mb-14">
        <div className="pt-16 px-12 mt-8">
          <div>
            <h2 className="text-4xl text-slate-900 font-roboto-slab dark:text-slate-50 font-bold relative after:contents[] after:w-36 after:h-[2px] after:bg-primary after:absolute after:top-1/2 -translate-y-1/2 after:right-8 after:left-52">
              Resume
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div>
              <h3 className="text-3xl dark:text-white font-medium pb-6 flex justify-start items-center">
                <FaGraduationCap
                  size={30}
                  className="mx-1 text-primary-dark font-bold"
                />
                Education
              </h3>
              <div className="grid grid-cols-1 gap-6">
                {educationList.map((education, index) => (
                  <ResumeCard
                    key={index}
                    duration={education.duration}
                    title={education.title}
                    institution={education.institution}
                    location={education.location}
                    link={education.link}
                    className={`${
                      index / 2 == 0 ? "bg-rose-100" : "bg-yellow-100"
                    } dark:bg-mid-dark`}
                  />
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-3xl dark:text-white font-medium pb-6 flex justify-start items-center">
                <FaLaptopCode
                  size={30}
                  className="mx-1 text-primary-dark font-bold"
                />
                Experience
              </h3>
              <div className="grid grid-cols-1 gap-6">
                {workExperienceList.map((work, index) => (
                  <ResumeCard
                    key={index}
                    duration={work.duration}
                    title={work.title}
                    institution={work.institution}
                    location={work.location}
                    link={work.link}
                    className={`${
                      index / 2 != 0 ? "bg-rose-100" : "bg-yellow-100"
                    } dark:bg-mid-dark`}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pt-4 lg:pt-12">
            <div>
              <h3 className="text-3xl dark:text-white font-medium pb-8">
                Working Skills
              </h3>
              {skillLists.map((skill, index) => (
                <SkillIndicator
                  key={index}
                  title={skill.title}
                  percentage={skill.percent}
                />
              ))}
            </div>
            <div>
              <h3 className="text-3xl dark:text-white font-medium pb-8">
                knowledge&apos;s
              </h3>
              <div className="flex flex-wrap gap-4">
                {knowledgeList.map((knowledge, index) => (
                  <button
                    key={index}
                    className="text-base rounded-md py-1 px-3 bg-slate-200
                   text-slate-700  dark:text-slate-300 dark:bg-slate-800"
                  >
                    {knowledge}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
        <CopyRights />
      </div>
    </Wrapper>
  );
}

export default Resume;
