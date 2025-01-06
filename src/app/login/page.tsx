"use client";
import Header from "@/components/header";
import localApi from "@/services/repositories/api-agent";
import React from "react";

function LoginPage() {


  const handleLogin = async () => {
    try {
      const apiData = {
        email: "ameerhamza@gmail.com",
        password: "password@123!4",
      };
      console.log(apiData, "apiData");
      
      const resp = await localApi.post("/api/auth/login", apiData);
      console.log(resp, "response");
    } catch (error) {
      console.log(error, "error");
    }
  };
  return (
    <>
      <Header />
      <div className=" bg-gray-100 py-6 flex flex-col  justify-center sm:py-12 bg-transparent">
        <div className="relative py-3 sm:max-w-xl sm:mx-auto">
          <div
            className="absolute inset-0 bg-gradient-to-r from-blue-600 to-red-500 shadow-lg 
         -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"
          ></div>
          <div className="relative px-4 py-10 bg-white dark:bg-slate-800 shadow-lg sm:rounded-3xl sm:p-20">
            <div className="max-w-md mx-auto">
              <div>
                <h1 className="text-2xl font-semibold dark:text-slate-100">
                  Login to your account
                </h1>
              </div>
              <div className="divide-y divide-gray-200">
                <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                  <div className="relative z-0 w-full mt-[40px] mb-8 group">
                    <input
                      type="text"
                      name="email"
                      className="block autofill:bg-transparent py-2.5 px-0 w-full text-sm text-gray-lite bg-transparent border-0 border-b-[2px] border-[#B5B5B5] appearance-none dark:text-white dark:border-[#333333] dark:focus:border-[#FF6464] focus:outline-none focus:ring-0 focus:border-[#FF6464] peer"
                      placeholder=" "
                    />
                    <label
                      htmlFor="email"
                      className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-color-910 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#FF6464] peer-focus:dark:text-[#FF6464] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8"
                    >
                      Email *
                    </label>
                  </div>
                  <div className="relative z-0 w-full mt-[40px] mb-8 group">
                    <input
                      type="text"
                      name="password"
                      className="block autofill:bg-transparent py-2.5 px-0 w-full text-sm text-gray-lite bg-transparent border-0 border-b-[2px] border-[#B5B5B5] appearance-none dark:text-white dark:border-[#333333] dark:focus:border-[#FF6464] focus:outline-none focus:ring-0 focus:border-[#FF6464] peer"
                      placeholder=" "
                    />
                    <label
                      htmlFor="password"
                      className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-color-910 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#FF6464] peer-focus:dark:text-[#FF6464] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8"
                    >
                      Password *
                    </label>
                  </div>
                  <div className="relative">
                    <button
                      onClick={handleLogin}
                      className="group relative inline-flex items-center
                     justify-center overflow-hidden rounded bg-white px-6 py-3 font-medium transition-all hover:bg-white"
                    >
                      <span
                        className="absolute bottom-0 left-0 mb-9 ml-9 h-48 w-48 -translate-x-full translate-y-full 
    rotate-[-40deg]
     rounded bg-gradient-to-br from-[#ff8a05] via-[#ff5478] to-[#ff00c6] transition-all
      duration-500 ease-out group-hover:mb-32 group-hover:ml-0 group-hover:translate-x-0"
                      ></span>
                      <span
                        className="relative w-full text-left text-black transition-colors duration-300 ease-in-out
     group-hover:text-white"
                      >
                        Login
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginPage;
