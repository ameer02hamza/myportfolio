"use client";
import React from 'react'
import Header from './header'
import MobileNav from './nmbl-nav';
import Card from './card';
import NavBar from './nav';
import Profile from './profile';

function Wrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-image-light dark:bg-image-dark bg-center bg-cover bg-no-repeat bg-fixed px-2">
    <Header />
    <MobileNav />
        {/* <main> */}
          <section className="main_section mt-40">
            <div className="container grid grid-cols-12 lg:gap-10">
            <Profile />
  
              <div className="col-span-12 lg:col-span-8 rounded-2xl">
               <NavBar />
               {children}           
              </div>
            </div>
          </section>
        {/* </main> */}
      </div>
  )
}

export default Wrapper