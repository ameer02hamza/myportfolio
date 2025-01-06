import React from "react";

function SkillIndicator({
  title,
  percentage,
}: {
  title: string;
  percentage: string;
}) {
  return (
    <>
      <div className="pb-8">
        <p
          className="text-slate-500 pb-1 flex justify-between 
        items-center text-base dark:texl-slate-100"
        >
          <span>{title}</span>
          <span>{percentage}</span>
        </p>
        <div
          className={`${
            parseInt(percentage.split("%")[0]) >= 90
              ? "bg-green-400"
              : "bg-[#FF6464]"
          }  h-1 rounded-full`}
          style={{ width: percentage }}
        ></div>
      </div>
      {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="col-span-1">
          <h4 className="text-5xl dark:text-white font-medium mb-6">
            {" "}
            Working Skills{" "}
          </h4>
          <div className="mb-5">
            <div className="flex justify-between mb-1">
              <span className=" font-semibold text-[#526377] dark:text-[#A6A6A6]">
                Web Design
              </span>
              <span className=" font-semibold text-[#526377] dark:text-[#A6A6A6">
                65%
              </span>
            </div>
            <div className="w-full bg-[#edf2f2] rounded-full h-1 dark:bg-[#1c1c1c]">
              <div
                className="bg-[#FF6464] h-1 rounded-full"
                style={{ width: percentage }}
              ></div>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
}

export default SkillIndicator;
