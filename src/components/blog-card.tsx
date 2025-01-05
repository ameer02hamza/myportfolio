import React from "react";

function BlogCard({
  image,
  date,
  title,
  description,
  id,
}: {
  image: string;
  date: string;
  title: string;
  description: string;
  id: string;
}) {
  return (
    <div className="p-5 rounded-lg mb-2 h-full bg-[#fcf4ff] dark:bg-transparent dark:border-[#212425] dark:border-2">
      <div className="overflow-hidden rounded-lg ">
        <a href="#ex1" rel="modal:open">
          <img
            className="rounded-lg w-full  cursor-pointer transition duration-200 ease-in-out transform hover:scale-110"
            src={image}
            alt="blog image"
          />
        </a>
        <div className="mt-3 flex justify-end font-bold text-sm dark:text-white">{date}</div>
      </div>
      <div className="flex mt-4 text-tiny text-gray-lite dark:text-[#A6A6A6]">
        <span className=" mx-2 text-lg font-bold">{title}</span>       
      </div>
      
      <h3 className="text-lg font-normal dark:text-white duration-300 transition cursor-pointer
       mt-3 pr-4 hover:text-[#FA5252] dark:hover:text-red-500">
        <a href="#ex1" rel="modal:open">
          {description}
        </a>
      </h3>
    </div>
  );
}

export default BlogCard;
