"use client";
import { toggleMblMenu, toggleTheme } from "@/redux/features/themeSlice";
import { AppDispatch, RootState } from "@/redux/store/store";
import { usePathname, useRouter } from "next/navigation";
import React from "react";
import { FaBarsProgress, FaMoon } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";
import { MdWbSunny } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";

function Header() {
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();
  const path = usePathname();
  const isMenuOpen = useSelector((state: RootState) => state.theme.mobileMenu);

  const changeTheme = () => {
    dispatch(toggleTheme());
  };
  const toggleMobileMenu = (e) => {
    console.log("hello");
    
    e.preventDefault();
    dispatch(toggleMblMenu());
  };
  const toggleRoute = () => {
    if (path === "/login") {
      router.push("/");
      return;
    }
    router.push("/login");
  };
  return (
    <nav className="py-5 px-5 lg:py-12 bg-transparent">
      <div className="container flex  justify-between items-center">
        <div className="text-left flex items-center justify-start gap-3">
          <span
            onClick={changeTheme}
            className="inline-flex items-center justify-center darkmode w-10 h-10
             rounded-full cursor-pointer bg-slate-100 hover:bg-primary
              hover:text-primary-dark  text-2xl "
          >
            <FaMoon className="text-3xl dark-mode-light dark:hidden" />

            <MdWbSunny
              className="text-2xl dark-mode-dark hidden fill-jacarta-700
             group-hover:fill-primary-dark group-focus:fill-primary-dark dark:block "
            />
          </span>
          <span
            onClick={toggleMobileMenu}
            className={`bars lg:hidden w-10 h-10 rounded-full bg-primary
             text-slate-50 inline-flex items-center justify-center cursor-pointer`}
          >
            {!isMenuOpen ? (
              <IoMdClose size={25} className="text-red-500 dark:text-white" />
            ) : (
              <FaBarsProgress
                className="text-red-500 dark:text-white"
                size={25}
              />
            )}
          </span>
        </div>
        <div>
          <button
            onClick={toggleRoute}
            className="group relative inline-flex items-center justify-center
           overflow-hidden rounded bg-white px-6 py-3 font-medium transition-all hover:bg-white"
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
              {path === "/login" ? "Home" : "Login"}
            </span>
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Header;
