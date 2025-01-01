import React from 'react'
import Wrapper from '../components/wrapper'
import CopyRights from '../components/rights'
import ResumeCard from '../components/resume-card'
import { FaGraduationCap, FaLaptopCode } from 'react-icons/fa6'

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
                        <FaGraduationCap size={30}  className='mx-1 text-primary-dark font-bold' />
                          Education
                        </h3>
                        <div className="grid grid-cols-1 gap-6">
                          <ResumeCard
                          duration='2021-2022'
                          title='Software developer'
                          institution='Epita University'
                          className='bg-yellow-100 dark:bg-mid-dark' />
                      
                        </div>
                      </div>
                      <div>
                      <h3 className="text-3xl dark:text-white font-medium pb-6 flex justify-start items-center">
                      <FaLaptopCode size={30} className='mx-1 text-primary-dark font-bold' />
                          Experience
                        </h3>
                        <div className="grid grid-cols-1 gap-6">
                        <ResumeCard
                          duration='2021-2022'
                          title='Education'
                          institution='Epita University'
                          className='bg-rose-50 dark:bg-mid-dark' />
                        </div>
                      </div>
                    </div>
  
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pt-4 lg:pt-12">
                      <div>
                        <h3 className="text-3xl dark:text-white font-medium pb-8">
                          Working Skills
                        </h3>
                        <div className="pb-8">
                          <p className="text-slate-500 pb-1 flex justify-between items-center text-base dark:texl-slate-100">
                            <span>Web Design</span>
                            <span>80%</span>
                          </p>
                          <div className="w-full h-[3px] bg-slate-300 rounded relative after:contents-[] after:w-[80%] after:h-full after:bg-red-400 after:absolute after:top-0 after:left-0 after:rounded"></div>
                        </div>
                        <div className="pb-8">
                          <p className="text-slate-500 pb-1 flex justify-between items-center text-base dark:texl-slate-100">
                            <span>Mobile App</span>
                            <span>95%</span>
                          </p>
                          <div className="w-full h-[3px] bg-slate-300 rounded relative after:contents-[] after:w-[95%] after:h-full after:bg-yellow-400 after:absolute after:top-0 after:left-0 after:rounded"></div>
                        </div>
                        <div className="pb-8">
                          <p className="text-slate-500 pb-1 flex justify-between items-center text-base dark:texl-slate-100">
                            <span>Illustrator</span>
                            <span>66%</span>
                          </p>
                          <div className="w-full h-[3px] bg-slate-300 rounded relative after:contents-[] after:w-[66%] after:h-full after:bg-cyan-500 after:absolute after:top-0 after:left-0 after:rounded"></div>
                        </div>
                        <div className="pb-8">
                          <p className="text-slate-500 pb-1 flex justify-between items-center text-base dark:texl-slate-100">
                            <span>Photoshop</span>
                            <span>75%</span>
                          </p>
                          <div className="w-full h-[3px] bg-slate-300 rounded relative after:contents-[] after:w-[75%] after:h-full after:bg-purple-400 after:absolute after:top-0 after:left-0 after:rounded"></div>
                        </div>
                      </div>
                      <div>
                        <h3 className="text-3xl dark:text-white font-medium pb-8">
                          knowledge's
                        </h3>
                        <div className="flex flex-wrap gap-4">
                          <button className="text-base rounded-md py-1 px-3 bg-slate-200 text-slate-700 dark:bg-slate-900 dark:text-slate-300">
                            Digital Design
                          </button>
                          <button className="text-base rounded-md py-1 px-3 bg-slate-200 text-slate-700 dark:bg-slate-900 dark:text-slate-300">
                            Marketing
                          </button>
                          <button className="text-base rounded-md py-1 px-3 bg-slate-200 text-slate-700 dark:bg-slate-900 dark:text-slate-300">
                            Social Media
                          </button>
                          <button className="text-base rounded-md py-1 px-3 bg-slate-200 text-slate-700 dark:bg-slate-900 dark:text-slate-300">
                            Print
                          </button>
                          <button className="text-base rounded-md py-1 px-3 bg-slate-200 text-slate-700 dark:bg-slate-900 dark:text-slate-300">
                            Time Management
                          </button>
                          <button className="text-base rounded-md py-1 px-3 bg-slate-200 text-slate-700 dark:bg-slate-900 dark:text-slate-300">
                            Flexibility
                          </button>
                          <button className="text-base rounded-md py-1 px-3 bg-slate-200 text-slate-700 dark:bg-slate-900 dark:text-slate-300">
                            Print
                          </button>
                          <button className="text-base rounded-md py-1 px-3 bg-slate-200 text-slate-700 dark:bg-slate-900 dark:text-slate-300">
                            Time Management
                          </button>
                          <button className="text-base rounded-md py-1 px-3 bg-slate-200 text-slate-700 dark:bg-slate-900 dark:text-slate-300">
                            Flexibility
                          </button>
                          <button className="text-base rounded-md py-1 px-3 bg-slate-200 text-slate-700 dark:bg-slate-900 dark:text-slate-300">
                            Print
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <CopyRights />
                </div>
    </Wrapper>
  )
}

export default Resume