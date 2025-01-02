import React from "react";

function SkillIndicator({
  title,
  percentage,
}: {
  title: string;
  percentage: string;
}) {
  return (
    <div className="pb-8">
      <p className="text-slate-500 pb-1 flex justify-between items-center text-base dark:texl-slate-100">
        <span>{title}</span>
        <span>{percentage}</span>
      </p>
      <div
        className={`w-full h-[3px] bg-slate-300 rounded relative after:contents-[] after:w-[${percentage}] after:h-full after:bg-purple-400 after:absolute after:top-0 after:left-0 after:rounded`}
      ></div>
    </div>
  );
}

export default SkillIndicator;
