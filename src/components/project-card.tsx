"use client";
import React, { useState } from "react";
import Image from "next/image";
import ShowModal from "./modal";

function ProjectCard({
  image,
  title,
  description,
  id,
  index,
}: {
  image: string;
  title: string;
  description: string;
  id: string;
  index: number;
}) {
  const [showModal, setShowModal] = useState(false);
  const handleModal = (e) => {
    e.preventDefault();
    console.log("clicked", showModal);

    setShowModal(!showModal);
  };
  return (
    <>
      <div className="p-5 rounded-lg mb-2 h-full bg-[#fcf4ff] dark:bg-transparent dark:border-[#212425] dark:border-2">
        <div className="overflow-hidden rounded-lg ">
          <a onClick={handleModal}>
            <img
              className="rounded-lg w-full h-48  cursor-pointer transition duration-200 ease-in-out transform hover:scale-110"
              src={image}
              alt={`project image ${id }`}
              
            />
          </a>
        </div>
        <div className="flex mt-4 text-tiny text-gray-lite dark:text-[#A6A6A6]">
          <span className=" mx-2 text-lg font-bold">{title}</span>
        </div>

        <h3
          className="text-lg font-normal dark:text-white duration-300 transition cursor-pointer
       mt-3 pr-4 hover:text-[#FA5252] dark:hover:text-red-500"
        >
          <a onClick={handleModal}>{description}</a>
        </h3>
      </div>
      {showModal ? <ShowModal index={index} handleModal={handleModal} /> : null}
    </>
  );
}

export default ProjectCard;
