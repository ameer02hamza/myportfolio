import React from 'react'
import { FaAddressBook, FaBlogger, FaFileLines, FaHive, FaHouse } from 'react-icons/fa6'

function MobileNav() {
  return (
    <div className="side_menu bg-slate-50 dark:bg-mid-dark rounded-b-2xl py-6 px-4 hidden">
          <ul className="grid grid-cols-1 gap-2">
            <li>
              <a
                href="#"
                className="block p-2 text-slate-900 rounded-md hover:text-slate-50 hover:hover_active dark:text-slate-100 active"
              >
                <FaHouse />
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block p-2 rounded-md text-slate-900 hover:text-slate-50 hover:hover_active dark:text-slate-100"
              >
                <FaFileLines /> Resume
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block p-2 rounded-md text-slate-900 hover:text-slate-50 hover:hover_active dark:text-slate-100"
              >
                <FaHive />
                Works
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block p-2 rounded-md text-slate-900 hover:text-slate-50 hover:hover_active dark:text-slate-100"
              >
                <FaBlogger />
                Blogs
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block p-2 rounded-md text-slate-900 hover:text-slate-50 hover:hover_active dark:text-slate-100"
              >
                <FaAddressBook />
                Contact
              </a>
            </li>
          </ul>
        </div>
  )
}

export default MobileNav