import { RootState } from "@/redux/store/store";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import {
  FaAddressBook,
  FaBlogger,
  FaFileLines,
  FaHive,
  FaHouse,
  FaHouseChimney,
} from "react-icons/fa6";
import { useSelector } from "react-redux";

function MobileNav() {
  const isMenuOpen = useSelector((state: RootState) => state.theme.mobileMenu);
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();
  useEffect(() => {
    setMenuOpen(isMenuOpen);
  }, [isMenuOpen]);
  const path = usePathname();

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
    <div
      className={`bg-slate-50 dark:bg-slate-800 rounded-b-2xl py-6 px-4 ${
        !menuOpen ? "" : "hidden"
      }  lg:hidden`}
    >
      <ul className="grid grid-cols-1 gap-2">
        {navList.map((nav, index) => (
          <li key={index}>
            <a
              onClick={(e) => {
                e.preventDefault();
                router.push(nav.link);
              }}
              className={`flex text-xl  items-center p-2 text-slate-900 cursor-pointer
                rounded-md hover:text-slate-50 hover:active gap-2
                 dark:text-slate-100 ${
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

export default MobileNav;
