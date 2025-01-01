import React from "react";
import { FaHtml5 } from "react-icons/fa6";

function Card({
  title,
  description,
  icon,
}: {
  title: string;
  description: string;
  icon: string;
}) {
  return (
    <div className="p-4 rounded-md border border-slate-200 dark:border-slate-800 flex gap-5">
      <div>
        <FaHtml5 className=" text-red-500" size={30}/>
      </div>
      <div>
        <h4 className="dark:text-white text-xl font-semibold">
          lorem ipsum dolor
        </h4>
        <p className="leading-8 text-gray-lite dark:text-[#A6A6A6]">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
          euismod volutpat.
        </p>
      </div>
    </div>
  );
}

export default Card;

{
  /* <div className="p-4 rounded-md border border-slate-200 dark:border-slate-800 flex gap-5">
<div>
  <img
    className="w-28"
    src="/images/icons/icon-2.svg"
    alt="icon-2"
  />
</div>
<div>
  <h4 className="dark:text-white text-xl font-semibold">
    App Development
  </h4>
  <p className="leading-8 text-gray-lite dark:text-[#A6A6A6]">
    Lorem ipsum dolor sit amet, consectetuer adipiscing
    elit, sed diam euismod volutpat.
  </p>
</div>
</div>
<div className="p-4 rounded-md border border-slate-200 dark:border-slate-800 flex gap-5">
<div>
  <img
    className="w-28"
    src="/images/icons/icon-3.svg"
    alt="icon-3"
  />
</div>
<div>
  <h4 className="dark:text-white text-xl font-semibold">
    Photography
  </h4>
  <p className="leading-8 text-gray-lite dark:text-[#A6A6A6]">
    Lorem ipsum dolor sit amet, consectetuer adipiscing
    elit, sed diam euismod volutpat.
  </p>
</div>
</div>
<div className="p-4 rounded-md border border-slate-200 dark:border-slate-800 flex gap-5">
<div>
  <img
    className="w-28"
    src="/images/icons/icon-4.svg"
    alt="icon-4"
  />
</div>
<div>
  <h4 className="dark:text-white text-xl font-semibold">
    Photography
  </h4>
  <p className="leading-8 text-gray-lite dark:text-[#A6A6A6]">
    Lorem ipsum dolor sit amet, consectetuer adipiscing
    elit, sed diam euismod volutpat.
  </p>
</div>
</div>
<div className="p-4 rounded-md border border-slate-200 dark:border-slate-800 flex gap-5">
<div>
  <img
    className="w-28"
    src="/images/icons/icon-5.svg"
    alt="icon-5"
  />
</div>
<div>
  <h4 className="dark:text-white text-xl font-semibold">
    Management
  </h4>
  <p className="leading-8 text-gray-lite dark:text-[#A6A6A6]">
    Lorem ipsum dolor sit amet, consectetuer adipiscing
    elit, sed diam euismod volutpat.
  </p>
</div>
</div>
<div className="p-4 rounded-md border border-slate-200 dark:border-slate-800 flex gap-5">
<div>
  <img
    className="w-28"
    src="/images/icons/icon-6.svg"
    alt="icon-6"
  />
</div>
<div>
  <h4 className="dark:text-white text-xl font-semibold">
    Web Development
  </h4>
  <p className="leading-8 text-gray-lite dark:text-[#A6A6A6]">
    Lorem ipsum dolor sit amet, consectetuer adipiscing
    elit, sed diam euismod volutpat.
  </p>
</div>
</div> */
}
