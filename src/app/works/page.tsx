"use client";
import React, { useCallback, useState } from "react";
import Wrapper from "../../components/wrapper";
import CopyRights from "../../components/rights";
import ProjectCard from "@/components/project-card";
import { projectsList } from "@/consts/card.conts";
import Pagination from "@/components/pagination";

function Work() {
  const recordsPerPage = 4;
  const [currentRecords, setCurrentRecords] = useState(
    projectsList.slice(0, recordsPerPage)
  );
  const handlePageChange = useCallback((newRecords) => {
    setCurrentRecords(newRecords);
  }, []);
  return (
    <Wrapper>
      <section className="bg-white lg:rounded-2xl dark:bg-slate-800 mt-5">
        <div className="container px-4 sm:px-5 md:px-10 lg:px-[60px]">
          <div className="py-12">
            <h2
              className="text-4xl text-slate-900 
                      font-roboto-slab dark:text-slate-50 font-bold "
            >
              My Projects
            </h2>
            <div className="grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 mt-[30px] grid gap-x-10 gap-y-7 mb-6">
              {currentRecords.map((project, index) => (
                <ProjectCard
                  key={index}
                  description={project.description}
                  title={project.title}
                  image={project.image}
                  id={project.id}
                  index={index}
                />
              ))}
            </div>
            <Pagination
              records={projectsList}
              onPageChange={handlePageChange}
              recordsPerPage={recordsPerPage}
            />
          </div>
        </div>
        <CopyRights />
      </section>
    </Wrapper>
  );
}

export default Work;
