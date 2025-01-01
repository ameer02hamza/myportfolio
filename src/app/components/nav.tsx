"use client";
import { usePathname, useRouter } from "next/navigation";
import React from "react";
import {
  FaHouseChimney,
  FaFileLines,
  FaHive,
  FaBlogger,
  FaAddressBook,
} from "react-icons/fa6";

function NavBar() {
  const router = useRouter();
  const path = usePathname();
  console.log(path);
  
  const navList = [
    {
      name: "Home",
      icon: <FaHouseChimney size={20} />,
      link: "/",
    },
    {
      name: "Resume",
      icon: <FaFileLines size={20} />,
      link: "/resume",
    },
    {
      name: "Works",
      icon: <FaHive size={20} />,
      link: "/works",
    },
    {
      name: "Blogs",
      icon: <FaBlogger size={20} />,
      link: "/blogs",
    },
    {
      name: "Contact",
      icon: <FaAddressBook size={20} />,
      link: "/contact",
    },
  ];
  return (
    <div className="text-right -mt-10 hidden lg:block">
      <ul className="md:inline-flex gap-4 py-6 px-10 rounded-3xl bg-slate-50 dark:bg-black menu">
        {navList.map((nav, index) => (
          <li
            key={index}
            className="cursor-pointer hover:scale-105 transform transition duration-300 ease-in-out"
          >
            <a
              onClick={() => router.push(nav.link)}
              className={`text-slate-900 w-20 hover:text-slate-50 text-1xl py-4 rounded-xl 
                flex items-center flex-col justify-center hover:hover_active bg-light-gray
                 dark:bg-mid-dark dark:text-slate-100 ${
                    path.toLowerCase() == nav.link.toLowerCase() ? "active" : ""
                 }`}
            >
              {nav.icon}
              {nav.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default NavBar;
