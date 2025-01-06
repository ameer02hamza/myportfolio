import React from "react";

function ResumeCard({
  duration,
  title,
  institution,
  className,
  location,
  link
}: {
  duration: string;
  title: string;
  institution: string;
  location: string;
  link:string
  className?: string;
}) {
  return (
    <a href={link} target="_blank" rel="noreferrer">
      <div className={` ${className} py-4 pl-5 pr-3 space-y-2 mb-6 rounded-lg dark:bg-slate-800
     dark:border-[#212425] dark:border-2`}>
      <span className="text-sm text-slate-400">{duration}</span>
      <h4 className="text-xl font-medium text-slate-800 dark:text-slate-100">
        {title}
      </h4>
      <p className="text-base font-normal text-slate-700 dark:text-slate-200">
        {institution}
      </p>
      <span className="font-bold text-red-500 dark:text-slate-100">{location}</span>
    </div>
    </a>
  );
}

export default ResumeCard;
