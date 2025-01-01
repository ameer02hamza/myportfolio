import React from 'react'
import Wrapper from '../components/wrapper'
import CopyRights from '../components/rights'

function Work() {
  return (
   <Wrapper>
      <section  className="bg-gray-100 mt-5 lg:rounded-2xl dark:bg-[#111111] p-2">
                    <div className="container  mb-8 px-4 sm:px-5 md:px-10 lg:px-[60px]">

                        <div id="isotop-gallery-wrapper" className="mymix portfolio_list-two grid grid-cols-1 md:grid-cols-2 gap-2  ">
                            <div className="grid-sizer"></div>
                            <div className="portfolio_list-two-items isotop-item plugin custom ">
                                <div
                                    className="rounded-lg bg-[#fff0f0] p-6 dark:bg-transparent dark:border-[2px] border-[#212425]">
                                    <div className="overflow-hidden rounded-lg">
                                        <a href="#portfiloOne" rel="modal:open">
                                            <img className="w-full cursor-pointer transition duration-200 ease-in-out transform hover:scale-110 rounded-lg h-auto"
                                                src="/images/blog.jpg" alt="portfolio image" />
                                        </a>
                                    </div>
                                    <span
                                        className="pt-5 text-[14px] font-normal text-gray-lite block dark:text-[#A6A6A6]">UI/UX</span>
                                    <h2
                                        className="font-medium cursor-pointer text-xl duration-300 transition hover:text-[#FA5252] dark:hover:text-[#FA5252] dark:text-white mt-2">
                                        <a href="#portfiloOne" rel="modal:open"> Chul urina </a>
                                    </h2>
                                </div>
                            </div>

                            {/* <div id="portfiloOne" className="modal-container modal">
                                <div
                                    className="overflow-y-scroll scroll-hide-1700  max-h-[60vh] lg:max-h-[80vh] dark:scrollbarDark scrollbarLight">
                                    <h2 className="text-[#ef4060] dark:hover:text-[#FA5252] text-4xl text-center font-bold">
                                        UI/UX Project
                                    </h2>
                                    <div className="grid grid-cols-1 lg:grid-cols-2 my-6 pr-3">
                                        <div className="space-y-2">
                                            <p className="dark:text-white flex items-center text-[15px] sm:text-lg">
                                                <i
                                                    className="fa-regular fa-file-lines sm:text-lg hidden sm:block mr-4 md:text-xl"></i>
                                                Project :&nbsp;
                                                <span className="font-medium"> Website</span>
                                            </p>
                                            <p className="dark:text-white flex items-center text-[15px] sm:text-lg">
                                                <i className="fa-solid fa-code text-lg mr-2 hidden sm:block"></i>
                                                Langages :&nbsp;
                                                <span className="font-medium">Photoshop, Figma</span>
                                            </p>
                                        </div>

                                        <div className="space-y-2">
                                            <p
                                                className="dark:text-white flex items-center mt-2 lg:mt-0 text-[15px] sm:text-lg">
                                                <i className="fa-regular fa-user text-lg mr-2 hidden sm:block"></i>
                                                Client :&nbsp; <span className="font-medium">Envato</span>
                                            </p>
                                            <p className="dark:text-white flex items-center text-[15px] sm:text-lg">
                                                <i
                                                    className="fa-solid fa-arrow-up-right-from-square text-lg mr-2 hidden sm:block"></i>
                                                Preview :&nbsp;
                                                <span
                                                    className="font-medium transition-all duration-300 ease-in-out hover:text-[#ef4060]">
                                                    <a href="https://www.envato.com" target="_blank"
                                                        rel="noopener noreferrer">www.envato.com</a>
                                                </span>
                                            </p>
                                        </div>
                                    </div>

                                    <p className="dark:text-white text-2line font-normal text-[15px] sm:text-sm">
                                        Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                                        Mollitia placeat magnam possimus iusto blanditiis pariatur
                                        labore explicabo quo repellat hic dolorum numquam
                                        asperiores, voluptatum fugiat reiciendis aspernatur, non,
                                        odio aperiam voluptas ex tempora vitae. Dolor, consequatur
                                        quidem! Quas magni distinctio dolorum dolore natus, vel
                                        numquam accusamus. Nostrum eligendi recusandae qui tempore
                                        deserunt!
                                    </p>
                                    <div className="pr-3">
                                        <img className="w-full md:h-[450px] h-auto object-cover rounded-xl mt-6"
                                            src="/images/blog.jpg" alt="portfolio image" />
                                    </div>
                                </div>
                                <a href="#close-modal" rel="modal:close"
                                    className="close bg-close-light dark:bg-close-dark">Close</a>
                            </div> */}
                            <div className="portfolio_list-two-items isotop-item dev branding ">
                                <div
                                    className="rounded-lg bg-[#fff3fc] dark:bg-transparent p-6 dark:border-[2px] border-[#212425]">
                                    <div className="overflow-hidden rounded-lg">
                                        <a href="#portfiloTwo" rel="modal:open">
                                            <img className="w-full cursor-pointer transition duration-200 ease-in-out transform hover:scale-110 rounded-lg h-auto"
                                                src="/images/blog.jpg/" alt="portfolio image" />
                                        </a>
                                    </div>
                                    <span
                                        className="pt-5 text-[14px] font-normal text-gray-lite block dark:text-[#A6A6A6]">Logo</span>
                                    <h2
                                        className="font-medium cursor-pointer text-xl duration-300 transition hover:text-[#FA5252] dark:hover:text-[#FA5252] dark:text-white mt-2">
                                        <a href="#portfiloTwo" rel="modal:open">Chul urina</a>
                                    </h2>
                                </div>
                            </div>
                            {/* <div id="portfiloTwo" className="modal-container modal">
                                <div
                                    className="overflow-y-scroll scroll-hide-1700  max-h-[60vh] lg:max-h-[80vh] dark:scrollbarDark scrollbarLight">
                                    <h2 className="text-[#ef4060] dark:hover:text-[#FA5252] text-4xl text-center font-bold">
                                        Logo Project
                                    </h2>
                                    <div className="grid grid-cols-1 lg:grid-cols-2 my-6 pr-3">
                                        <div className="space-y-2">
                                            <p className="dark:text-white flex items-center text-[15px] sm:text-lg">
                                                <i
                                                    className="fa-regular fa-file-lines sm:text-lg hidden sm:block mr-4 md:text-xl"></i>
                                                Project :&nbsp;
                                                <span className="font-medium"> Website</span>
                                            </p>
                                            <p className="dark:text-white flex items-center text-[15px] sm:text-lg">
                                                <i className="fa-solid fa-code text-lg mr-2 hidden sm:block"></i>
                                                Langages :&nbsp;
                                                <span className="font-medium">Photoshop, Figma</span>
                                            </p>
                                        </div>
                                        <div className="space-y-2">
                                            <p
                                                className="dark:text-white flex items-center mt-2 lg:mt-0 text-[15px] sm:text-lg">
                                                <i className="fa-regular fa-user text-lg mr-2 hidden sm:block"></i>
                                                Client :&nbsp; <span className="font-medium">Envato</span>
                                            </p>
                                            <p className="dark:text-white flex items-center text-[15px] sm:text-lg">
                                                <i
                                                    className="fa-solid fa-arrow-up-right-from-square text-lg mr-2 hidden sm:block"></i>
                                                Preview :&nbsp;
                                                <span
                                                    className="font-medium transition-all duration-300 ease-in-out hover:text-[#ef4060]">
                                                    <a href="https://www.envato.com" target="_blank"
                                                        rel="noopener noreferrer">www.envato.com</a>
                                                </span>
                                            </p>
                                        </div>
                                    </div>

                                    <p className="dark:text-white text-2line font-normal text-[15px] sm:text-sm">
                                        Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                                        Mollitia placeat magnam possimus iusto blanditiis pariatur
                                        labore explicabo quo repellat hic dolorum numquam
                                        asperiores, voluptatum fugiat reiciendis aspernatur, non,
                                        odio aperiam voluptas ex tempora vitae. Dolor, consequatur
                                        quidem! Quas magni distinctio dolorum dolore natus, vel
                                        numquam accusamus. Nostrum eligendi recusandae qui tempore
                                        deserunt!
                                    </p>
                                    <div className="pr-3">
                                        <img className="w-full md:h-[450px] h-auto object-cover rounded-xl mt-6"
                                            src="/images/blog.jpg" alt="portfolio image" />
                                    </div>
                                </div>
                                <a href="#close-modal" rel="modal:close"
                                    className="close bg-close-light dark:bg-close-dark">Close</a>
                            </div> */}

                            <div className="portfolio_list-two-items isotop-item plugin ">
                                <div
                                    className="rounded-lg bg-[#fff3fc] dark:bg-transparent p-6 dark:border-[2px] border-[#212425]">
                                    <div className="overflow-hidden rounded-lg">
                                        <a href="#portfiloThree" rel="modal:open">
                                            <img className="w-full cursor-pointer transition duration-200 ease-in-out transform hover:scale-110 rounded-lg h-auto"
                                                src="/images/blog.jpg/" alt="portfolio image" />
                                        </a>
                                    </div>
                                    <span
                                        className="pt-5 text-[14px] font-normal text-gray-lite block dark:text-[#A6A6A6]">UI/UX</span>
                                    <h2
                                        className="font-medium cursor-pointer text-xl duration-300 transition hover:text-[#FA5252] dark:hover:text-[#FA5252] dark:text-white mt-2">
                                        <a href="#portfiloThree" rel="modal:open">
                                            T-Shirt Design
                                        </a>
                                    </h2>
                                </div>
                            </div>

                            {/* <div id="portfiloThree" className="modal-container modal">
                                <div
                                    className="overflow-y-scroll scroll-hide-1700  max-h-[60vh] lg:max-h-[80vh] dark:scrollbarDark scrollbarLight">
                                    <h2 className="text-[#ef4060] dark:hover:text-[#FA5252] text-4xl text-center font-bold">
                                        T-Shirt Design Project
                                    </h2>
                                    <div className="grid grid-cols-1 lg:grid-cols-2 my-6 pr-3">
                                        <div className="space-y-2">
                                            <p className="dark:text-white flex items-center text-[15px] sm:text-lg">
                                                <i
                                                    className="fa-regular fa-file-lines sm:text-lg hidden sm:block mr-4 md:text-xl"></i>
                                                Project :&nbsp;
                                                <span className="font-medium"> Website</span>
                                            </p>
                                            <p className="dark:text-white flex items-center text-[15px] sm:text-lg">
                                                <i className="fa-solid fa-code text-lg mr-2 hidden sm:block"></i>
                                                Langages :&nbsp;
                                                <span className="font-medium">Photoshop, Figma</span>
                                            </p>
                                        </div>
                                        <div className="space-y-2">
                                            <p
                                                className="dark:text-white flex items-center mt-2 lg:mt-0 text-[15px] sm:text-lg">
                                                <i className="fa-regular fa-user text-lg mr-2 hidden sm:block"></i>
                                                Client :&nbsp; <span className="font-medium">Envato</span>
                                            </p>
                                            <p className="dark:text-white flex items-center text-[15px] sm:text-lg">
                                                <i
                                                    className="fa-solid fa-arrow-up-right-from-square text-lg mr-2 hidden sm:block"></i>
                                                Preview :&nbsp;
                                                <span
                                                    className="font-medium transition-all duration-300 ease-in-out hover:text-[#ef4060]">
                                                    <a href="https://www.envato.com" target="_blank"
                                                        rel="noopener noreferrer">www.envato.com</a>
                                                </span>
                                            </p>
                                        </div>
                                    </div>

                                    <p className="dark:text-white text-2line font-normal text-[15px] sm:text-sm">
                                        Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                                        Mollitia placeat magnam possimus iusto blanditiis pariatur
                                        labore explicabo quo repellat hic dolorum numquam
                                        asperiores, voluptatum fugiat reiciendis aspernatur, non,
                                        odio aperiam voluptas ex tempora vitae. Dolor, consequatur
                                        quidem! Quas magni distinctio dolorum dolore natus, vel
                                        numquam accusamus. Nostrum eligendi recusandae qui tempore
                                        deserunt!
                                    </p>
                                    <div className="pr-3">
                                        <img className="w-full md:h-[450px] h-auto object-cover rounded-xl mt-6"
                                            src="/images/blog.jpg" alt="portfolio image" />
                                    </div>
                                </div>
                                <a href="#close-modal" rel="modal:close"
                                    className="close bg-close-light dark:bg-close-dark">Close</a>
                            </div> */}

                            <div className="portfolio_list-two-items isotop-item dev custom ">
                                <div
                                    className="rounded-lg p-6 bg-[#e9faff] dark:bg-transparent dark:border-[2px] border-[#212425]">
                                    <div className="overflow-hidden rounded-lg">
                                        <a href="#portfiloFour" rel="modal:open">
                                            <img className="w-full cursor-pointer transition duration-200 ease-in-out transform hover:scale-110 rounded-lg h-auto"
                                                src="/images/blog.jpg/" alt="portfolio image" />
                                        </a>
                                    </div>
                                    <span
                                        className="pt-5 text-[14px] font-normal text-gray-lite block dark:text-[#A6A6A6]">UI/UX</span>
                                    <h2
                                        className="font-medium cursor-pointer text-xl duration-300 transition hover:text-[#FA5252] dark:hover:text-[#FA5252] dark:text-white mt-2">
                                        <a href="#portfiloFour" rel="modal:open">Packaging Box
                                        </a>
                                    </h2>
                                </div>
                            </div>

                            {/* <div id="portfiloFour" className="modal-container modal">
                                <div
                                    className="overflow-y-scroll scroll-hide-1700  max-h-[60vh] lg:max-h-[80vh] dark:scrollbarDark scrollbarLight">
                                    <h2 className="text-[#ef4060] dark:hover:text-[#FA5252] text-4xl text-center font-bold">
                                        Packaging Box Project
                                    </h2>
                                    <div className="grid grid-cols-1 lg:grid-cols-2 my-6 pr-3">
                                        <div className="space-y-2">
                                            <p className="dark:text-white flex items-center text-[15px] sm:text-lg">
                                                <i
                                                    className="fa-regular fa-file-lines sm:text-lg hidden sm:block mr-4 md:text-xl"></i>
                                                Project :&nbsp;
                                                <span className="font-medium"> Website</span>
                                            </p>
                                            <p className="dark:text-white flex items-center text-[15px] sm:text-lg">
                                                <i className="fa-solid fa-code text-lg mr-2 hidden sm:block"></i>
                                                Langages :&nbsp;
                                                <span className="font-medium">Photoshop, Figma</span>
                                            </p>
                                        </div>

                                        <div className="space-y-2">
                                            <p
                                                className="dark:text-white flex items-center mt-2 lg:mt-0 text-[15px] sm:text-lg">
                                                <i className="fa-regular fa-user text-lg mr-2 hidden sm:block"></i>
                                                Client :&nbsp; <span className="font-medium">Envato</span>
                                            </p>
                                            <p className="dark:text-white flex items-center text-[15px] sm:text-lg">
                                                <i
                                                    className="fa-solid fa-arrow-up-right-from-square text-lg mr-2 hidden sm:block"></i>
                                                Preview :&nbsp;
                                                <span
                                                    className="font-medium transition-all duration-300 ease-in-out hover:text-[#ef4060]">
                                                    <a href="https://www.envato.com" target="_blank"
                                                        rel="noopener noreferrer">www.envato.com</a>
                                                </span>
                                            </p>
                                        </div>
                                    </div>

                                    <p className="dark:text-white text-2line font-normal text-[15px] sm:text-sm">
                                        Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                                        Mollitia placeat magnam possimus iusto blanditiis pariatur
                                        labore explicabo quo repellat hic dolorum numquam
                                        asperiores, voluptatum fugiat reiciendis aspernatur, non,
                                        odio aperiam voluptas ex tempora vitae. Dolor, consequatur
                                        quidem! Quas magni distinctio dolorum dolore natus, vel
                                        numquam accusamus. Nostrum eligendi recusandae qui tempore
                                        deserunt!
                                    </p>
                                    <div className="pr-3">
                                        <img className="w-full md:h-[450px] h-auto object-cover rounded-xl mt-6"
                                            src="/images/blog.jpg" alt="portfolio image" />
                                    </div>
                                </div>
                                <a href="#close-modal" rel="modal:close"
                                    className="close bg-close-light dark:bg-close-dark">Close</a>
                            </div> */}

                            <div className="portfolio_list-two-items isotop-item branding ">
                                <div
                                    className="rounded-lg bg-[#fffae9] dark:bg-transparent p-6 dark:border-[2px] border-[#212425]">
                                    <div className="overflow-hidden rounded-lg">
                                        <a href="#portfiloFive" rel="modal:open">
                                            <img className="w-full cursor-pointer transition duration-200 ease-in-out transform hover:scale-110 rounded-lg h-auto"
                                                src="/images/blog.jpg/" alt="portfolio image" />
                                        </a>
                                    </div>
                                    <span
                                        className="pt-5 text-[14px] font-normal text-gray-lite block dark:text-[#A6A6A6]">Web
                                        Design</span>
                                    <h2
                                        className="font-medium cursor-pointer text-xl duration-300 transition hover:text-[#FA5252] dark:hover:text-[#FA5252] dark:text-white mt-2">
                                        <a href="#portfiloFive" rel="modal:open"> Aura Dione</a>
                                    </h2>
                                </div>
                            </div>

                            {/* <div id="portfiloFive" className="modal-container modal">
                                <div
                                    className="overflow-y-scroll scroll-hide-1700  max-h-[60vh] lg:max-h-[80vh] dark:scrollbarDark scrollbarLight">
                                    <h2 className="text-[#ef4060] dark:hover:text-[#FA5252] text-4xl text-center font-bold">
                                        Aura Dione Project
                                    </h2>
                                    <div className="grid grid-cols-1 lg:grid-cols-2 my-6 pr-3">
                                        <div className="space-y-2">
                                            <p className="dark:text-white flex items-center text-[15px] sm:text-lg">
                                                <i
                                                    className="fa-regular fa-file-lines sm:text-lg hidden sm:block mr-4 md:text-xl"></i>
                                                Project :&nbsp;
                                                <span className="font-medium"> Website</span>
                                            </p>
                                            <p className="dark:text-white flex items-center text-[15px] sm:text-lg">
                                                <i className="fa-solid fa-code text-lg mr-2 hidden sm:block"></i>
                                                Langages :&nbsp;
                                                <span className="font-medium">Photoshop, Figma</span>
                                            </p>
                                        </div>
                                        <div className="space-y-2">
                                            <p
                                                className="dark:text-white flex items-center mt-2 lg:mt-0 text-[15px] sm:text-lg">
                                                <i className="fa-regular fa-user text-lg mr-2 hidden sm:block"></i>
                                                Client :&nbsp; <span className="font-medium">Envato</span>
                                            </p>
                                            <p className="dark:text-white flex items-center text-[15px] sm:text-lg">
                                                <i
                                                    className="fa-solid fa-arrow-up-right-from-square text-lg mr-2 hidden sm:block"></i>
                                                Preview :&nbsp;
                                                <span
                                                    className="font-medium transition-all duration-300 ease-in-out hover:text-[#ef4060]">
                                                    <a href="https://www.envato.com" target="_blank"
                                                        rel="noopener noreferrer">www.envato.com</a>
                                                </span>
                                            </p>
                                        </div>
                                    </div>

                                    <p className="dark:text-white text-2line font-normal text-[15px] sm:text-sm">
                                        Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                                        Mollitia placeat magnam possimus iusto blanditiis pariatur
                                        labore explicabo quo repellat hic dolorum numquam
                                        asperiores, voluptatum fugiat reiciendis aspernatur, non,
                                        odio aperiam voluptas ex tempora vitae. Dolor, consequatur
                                        quidem! Quas magni distinctio dolorum dolore natus, vel
                                        numquam accusamus. Nostrum eligendi recusandae qui tempore
                                        deserunt!
                                    </p>
                                    <div className="pr-3">
                                        <img className="w-full md:h-[450px] h-auto object-cover rounded-xl mt-6"
                                            src="/images/blog.jpg" alt="portfolio image" />
                                    </div>
                                </div>
                                <a href="#close-modal" rel="modal:close"
                                    className="close bg-close-light dark:bg-close-dark">Close</a>
                            </div> */}

                            <div className="portfolio_list-two-items isotop-item branding ">
                                <div
                                    className="rounded-lg bg-[#f4f4ff] dark:bg-transparent p-6 dark:border-[2px] border-[#212425]">
                                    <div className="overflow-hidden rounded-lg">
                                        <a href="#portfiloSix" rel="modal:open">
                                            <img className="w-full cursor-pointer transition duration-200 ease-in-out transform hover:scale-110 rounded-lg h-auto"
                                                src="/images/blog.jpg/" alt="portfolio image" />
                                        </a>
                                    </div>
                                    <span
                                        className="pt-5 text-[14px] font-normal text-gray-lite block dark:text-[#A6A6A6]">Video</span>
                                    <h2
                                        className="font-medium cursor-pointer text-xl duration-300 transition hover:text-[#FA5252] dark:hover:text-[#FA5252] dark:text-white mt-2">
                                        <a href="#portfiloSix" rel="modal:open">
                                            Modern Bag Design
                                        </a>
                                    </h2>
                                </div>
                            </div>

                            {/* <div id="portfiloSix" className="modal-container modal">
                                <div
                                    className="overflow-y-scroll scroll-hide-1700  max-h-[60vh] lg:max-h-[80vh] dark:scrollbarDark scrollbarLight">
                                    <h2 className="text-[#ef4060] dark:hover:text-[#FA5252] text-4xl text-center font-bold">
                                        Modern Bag Design Project
                                    </h2>
                                    <div className="grid grid-cols-1 lg:grid-cols-2 my-6 pr-3">
                                        <div className="space-y-2">
                                            <p className="dark:text-white flex items-center text-[15px] sm:text-lg">
                                                <i
                                                    className="fa-regular fa-file-lines sm:text-lg hidden sm:block mr-4 md:text-xl"></i>
                                                Project :&nbsp;
                                                <span className="font-medium"> Website</span>
                                            </p>

                                            <p className="dark:text-white flex items-center text-[15px] sm:text-lg">
                                                <i className="fa-solid fa-code text-lg mr-2 hidden sm:block"></i>
                                                Langages :&nbsp;
                                                <span className="font-medium">Photoshop, Figma</span>
                                            </p>

                                        </div>

                                        <div className="space-y-2">
                                            <p
                                                className="dark:text-white flex items-center mt-2 lg:mt-0 text-[15px] sm:text-lg">
                                                <i className="fa-regular fa-user text-lg mr-2 hidden sm:block"></i>
                                                Client :&nbsp; <span className="font-medium">Envato</span>
                                            </p>
                                            <p className="dark:text-white flex items-center text-[15px] sm:text-lg">
                                                <i
                                                    className="fa-solid fa-arrow-up-right-from-square text-lg mr-2 hidden sm:block"></i>
                                                Preview :&nbsp;
                                                <span
                                                    className="font-medium transition-all duration-300 ease-in-out hover:text-[#ef4060]">
                                                    <a href="https://www.envato.com" target="_blank"
                                                        rel="noopener noreferrer">www.envato.com</a>
                                                </span>
                                            </p>
                                        </div>
                                    </div>

                                    <p className="dark:text-white text-2line font-normal text-[15px] sm:text-sm">
                                        Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                                        Mollitia placeat magnam possimus iusto blanditiis pariatur
                                        labore explicabo quo repellat hic dolorum numquam
                                        asperiores, voluptatum fugiat reiciendis aspernatur, non,
                                        odio aperiam voluptas ex tempora vitae. Dolor, consequatur
                                        quidem! Quas magni distinctio dolorum dolore natus, vel
                                        numquam accusamus. Nostrum eligendi recusandae qui tempore
                                        deserunt!
                                    </p>
                                    <div className="pr-3">
                                        <img className="w-full md:h-[450px] h-auto object-cover rounded-xl mt-6"
                                            src="/images/blog.jpg" alt="portfolio image" />
                                    </div>
                                </div>
                                <a href="#close-modal" rel="modal:close"
                                    className="close bg-close-light dark:bg-close-dark">Close</a>
                            </div> */}
                            <div className="portfolio_list-two-items isotop-item plugin ">
                                <div
                                    className="rounded-lg bg-[#f4f4ff] dark:bg-transparent p-6 dark:border-[2px] border-[#212425]">
                                    <div className="overflow-hidden rounded-lg">
                                        <a href="#portfiloSeven" rel="modal:open">
                                            <img className="w-full cursor-pointer transition duration-200 ease-in-out transform hover:scale-110 rounded-lg h-auto"
                                                src="/images/blog.jpg/" alt="portfolio image" />
                                        </a>
                                    </div>
                                    <span
                                        className="pt-5 text-[14px] font-normal text-gray-lite block dark:text-[#A6A6A6]">Video</span>
                                    <h2
                                        className="font-medium cursor-pointer text-xl duration-300 transition hover:text-[#FA5252] dark:hover:text-[#FA5252] dark:text-white mt-2">
                                        <a href="#portfiloSeven" rel="modal:open"> Chul urina </a>
                                    </h2>
                                </div>
                            </div>

                            {/* <div id="portfiloSeven" className="modal-container modal">
                                <div
                                    className="overflow-y-scroll scroll-hide-1700  max-h-[60vh] lg:max-h-[80vh] dark:scrollbarDark scrollbarLight">
                                    <h2 className="text-[#ef4060] dark:hover:text-[#FA5252] text-4xl text-center font-bold">
                                        UI/UX Project
                                    </h2>
                                    <div className="grid grid-cols-1 lg:grid-cols-2 my-6 pr-3">
                                        <div className="space-y-2">
                                            <p className="dark:text-white flex items-center text-[15px] sm:text-lg">
                                                <i
                                                    className="fa-regular fa-file-lines sm:text-lg hidden sm:block mr-4 md:text-xl"></i>
                                                Project :&nbsp;
                                                <span className="font-medium"> Website</span>
                                            </p>
                                            <p className="dark:text-white flex items-center text-[15px] sm:text-lg">
                                                <i className="fa-solid fa-code text-lg mr-2 hidden sm:block"></i>
                                                Langages :&nbsp;
                                                <span className="font-medium">Photoshop, Figma</span>
                                            </p>
                                        </div>
                                        <div className="space-y-2">
                                            <p
                                                className="dark:text-white flex items-center mt-2 lg:mt-0 text-[15px] sm:text-lg">
                                                <i className="fa-regular fa-user text-lg mr-2 hidden sm:block"></i>
                                                Client :&nbsp; <span className="font-medium">Envato</span>
                                            </p>
                                            <p className="dark:text-white flex items-center text-[15px] sm:text-lg">
                                                <i
                                                    className="fa-solid fa-arrow-up-right-from-square text-lg mr-2 hidden sm:block"></i>
                                                Preview :&nbsp;
                                                <span
                                                    className="font-medium transition-all duration-300 ease-in-out hover:text-[#ef4060]">
                                                    <a href="https://www.envato.com" target="_blank"
                                                        rel="noopener noreferrer">www.envato.com</a>
                                                </span>
                                            </p>
                                        </div>
                                    </div>

                                    <p className="dark:text-white text-2line font-normal text-[15px] sm:text-sm">
                                        Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                                        Mollitia placeat magnam possimus iusto blanditiis pariatur
                                        labore explicabo quo repellat hic dolorum numquam
                                        asperiores, voluptatum fugiat reiciendis aspernatur, non,
                                        odio aperiam voluptas ex tempora vitae. Dolor, consequatur
                                        quidem! Quas magni distinctio dolorum dolore natus, vel
                                        numquam accusamus. Nostrum eligendi recusandae qui tempore
                                        deserunt!
                                    </p>
                                    <div className="pr-3">
                                        <img className="w-full md:h-[450px] h-auto object-cover rounded-xl mt-6"
                                            src="/images/blog.jpg" alt="portfolio image" />
                                    </div>
                                </div>
                                <a href="#close-modal" rel="modal:close"
                                    className="close bg-close-light dark:bg-close-dark">Close</a>
                            </div> */}

                            <div className="portfolio_list-two-items isotop-item dev branding ">
                                <div
                                    className="rounded-lg bg-[#f4f4ff] dark:bg-transparent p-6 dark:border-[2px] border-[#212425]">
                                    <div className="overflow-hidden rounded-lg">
                                        <a href="#portfiloEight" rel="modal:open">
                                            <img className="w-full cursor-pointer transition duration-200 ease-in-out transform hover:scale-110 rounded-lg h-auto"
                                                src="/images/blog.jpg" alt="portfolio image" />
                                        </a>
                                    </div>
                                    <span
                                        className="pt-5 text-[14px] font-normal text-gray-lite block dark:text-[#A6A6A6]">Video</span>
                                    <h2
                                        className="font-medium cursor-pointer text-xl duration-300 transition hover:text-[#FA5252] dark:hover:text-[#FA5252] dark:text-white mt-2">
                                        <a href="#portfiloEight" rel="modal:open"> Chul urina </a>
                                    </h2>
                                </div>
                            </div>

                            {/* <div id="portfiloEight" className="modal-container modal">
                                <div
                                    className="overflow-y-scroll scroll-hide-1700  max-h-[60vh] lg:max-h-[80vh] dark:scrollbarDark scrollbarLight">
                                    <h2 className="text-[#ef4060] dark:hover:text-[#FA5252] text-4xl text-center font-bold">
                                        UI/UX Project
                                    </h2>
                                    <div className="grid grid-cols-1 lg:grid-cols-2 my-6 pr-3">
                                        <div className="space-y-2">
                                            <p className="dark:text-white flex items-center text-[15px] sm:text-lg">
                                                <i
                                                    className="fa-regular fa-file-lines sm:text-lg hidden sm:block mr-4 md:text-xl"></i>
                                                Project :&nbsp;
                                                <span className="font-medium"> Website</span>
                                            </p>
                                            <p className="dark:text-white flex items-center text-[15px] sm:text-lg">
                                                <i className="fa-solid fa-code text-lg mr-2 hidden sm:block"></i>
                                                Langages :&nbsp;
                                                <span className="font-medium">Photoshop, Figma</span>
                                            </p>
                                        </div>
                                        <div className="space-y-2">
                                            <p
                                                className="dark:text-white flex items-center mt-2 lg:mt-0 text-[15px] sm:text-lg">
                                                <i className="fa-regular fa-user text-lg mr-2 hidden sm:block"></i>
                                                Client :&nbsp; <span className="font-medium">Envato</span>
                                            </p>
                                            <p className="dark:text-white flex items-center text-[15px] sm:text-lg">
                                                <i
                                                    className="fa-solid fa-arrow-up-right-from-square text-lg mr-2 hidden sm:block"></i>
                                                Preview :&nbsp;
                                                <span
                                                    className="font-medium transition-all duration-300 ease-in-out hover:text-[#ef4060]">
                                                    <a href="https://www.envato.com" target="_blank"
                                                        rel="noopener noreferrer">www.envato.com</a>
                                                </span>
                                            </p>
                                        </div>
                                    </div>

                                    <p className="dark:text-white text-2line font-normal text-[15px] sm:text-sm">
                                        Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                                        Mollitia placeat magnam possimus iusto blanditiis pariatur
                                        labore explicabo quo repellat hic dolorum numquam
                                        asperiores, voluptatum fugiat reiciendis aspernatur, non,
                                        odio aperiam voluptas ex tempora vitae. Dolor, consequatur
                                        quidem! Quas magni distinctio dolorum dolore natus, vel
                                        numquam accusamus. Nostrum eligendi recusandae qui tempore
                                        deserunt!
                                    </p>
                                    <div className="pr-3">
                                        <img className="w-full md:h-[450px] h-auto object-cover rounded-xl mt-6"
                                            src="/images/blog.jpg" alt="portfolio image" />
                                    </div>
                                </div>
                                <a href="#close-modal" rel="modal:close"
                                    className="close bg-close-light dark:bg-close-dark">Close</a>
                            </div> */}
                            <div className="portfolio_list-two-items isotop-item plugin custom ">
                                <div
                                    className="rounded-lg bg-[#fff0f8] dark:bg-transparent p-6 dark:border-[2px] border-[#212425]">
                                    <div className="overflow-hidden rounded-lg">
                                        <a href="#portfiloNine" rel="modal:open">
                                            <img className="w-full cursor-pointer transition duration-200 ease-in-out transform hover:scale-110 rounded-lg h-auto"
                                                src="/images/blog.jpg" alt="portfolio image" />
                                        </a>
                                    </div>
                                    <span
                                        className="pt-5 text-[14px] font-normal text-gray-lite block dark:text-[#A6A6A6]">Web
                                        Design</span>
                                    <h2
                                        className="font-medium cursor-pointer text-xl duration-300 transition hover:text-[#FA5252] dark:hover:text-[#FA5252] dark:text-white mt-2">
                                        <a href="#portfiloNine" rel="modal:open"> Aura Dione </a>
                                    </h2>
                                </div>
                            </div>

                            {/* <div id="portfiloNine" className="modal-container modal">
                                <div
                                    className="overflow-y-scroll scroll-hide-1700  max-h-[60vh] lg:max-h-[80vh] dark:scrollbarDark scrollbarLight">
                                    <h2 className="text-[#ef4060] dark:hover:text-[#FA5252] text-4xl text-center font-bold">
                                        Aura Dione Project
                                    </h2>
                                    <div className="grid grid-cols-1 lg:grid-cols-2 my-6 pr-3">
                                        <div className="space-y-2">
                                            <p className="dark:text-white flex items-center text-[15px] sm:text-lg">
                                                <i
                                                    className="fa-regular fa-file-lines sm:text-lg hidden sm:block mr-4 md:text-xl"></i>
                                                Project :&nbsp;
                                                <span className="font-medium"> Website</span>
                                            </p>
                                            <p className="dark:text-white flex items-center text-[15px] sm:text-lg">
                                                <i className="fa-solid fa-code text-lg mr-2 hidden sm:block"></i>
                                                Langages :&nbsp;
                                                <span className="font-medium">Photoshop, Figma</span>
                                            </p>
                                        </div>

                                        <div className="space-y-2">
                                            <p
                                                className="dark:text-white flex items-center mt-2 lg:mt-0 text-[15px] sm:text-lg">
                                                <i className="fa-regular fa-user text-lg mr-2 hidden sm:block"></i>
                                                Client :&nbsp; <span className="font-medium">Envato</span>
                                            </p>
                                            <p className="dark:text-white flex items-center text-[15px] sm:text-lg">
                                                <i
                                                    className="fa-solid fa-arrow-up-right-from-square text-lg mr-2 hidden sm:block"></i>
                                                Preview :&nbsp;
                                                <span
                                                    className="font-medium transition-all duration-300 ease-in-out hover:text-[#ef4060]">
                                                    <a href="https://www.envato.com" target="_blank"
                                                        rel="noopener noreferrer">www.envato.com</a>
                                                </span>
                                            </p>
                                        </div>
                                    </div>

                                    <p className="dark:text-white text-2line font-normal text-[15px] sm:text-sm">
                                        Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                                        Mollitia placeat magnam possimus iusto blanditiis pariatur
                                        labore explicabo quo repellat hic dolorum numquam
                                        asperiores, voluptatum fugiat reiciendis aspernatur, non,
                                        odio aperiam voluptas ex tempora vitae. Dolor, consequatur
                                        quidem! Quas magni distinctio dolorum dolore natus, vel
                                        numquam accusamus. Nostrum eligendi recusandae qui tempore
                                        deserunt!
                                    </p>
                                    <div className="pr-3">
                                        <img className="w-full md:h-[450px] h-auto object-cover rounded-xl mt-6"
                                            src="/images/blog.jpg" alt="portfolio image" />
                                    </div>
                                </div>
                                <a href="#close-modal" rel="modal:close"
                                    className="close bg-close-light dark:bg-close-dark">Close</a>
                            </div> */}
                        </div>
                    </div>

                    <CopyRights />
                </section>
    
   </Wrapper>
  )
}

export default Work

