"use client";
import React, { useEffect } from "react";

function Pagination({
  records,
  recordsPerPage,
  onPageChange,
}: {
  records;
  recordsPerPage: number;
  onPageChange: (currentRecords) => void;
}) {
  const [currentPage, setCurrentPage] = React.useState(1);
  const totalPages = Math.ceil(records.length / recordsPerPage);
  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;

  useEffect(() => {
    const currentRecords = records.slice(indexOfFirstRecord, indexOfLastRecord);
    onPageChange(currentRecords);
  }, [
    currentPage,
  ]);
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);
  return (
    <div className="flex justify-center">
      <nav className="bg-gray-200 dark:bg-slate-700 rounded-full px-4 py-2">
        <ul className="flex text-gray-600 gap-4 font-medium py-2">
          <li className="cursor-pointer">
            <a
              onClick={() => currentPage > 1 && paginate(currentPage - 1)}
              className="rounded-full px-4 py-2 text-gray-300 dark:text-gray-600"
            >
              Prev
            </a>
          </li>
          {Array.from({ length: totalPages }, (_, index) => (
            <li key={index} className="cursor-pointer">
              <a
                onClick={() => paginate(index + 1)}
                className={`rounded-full px-4 py-2 ${
                  index + 1 === currentPage ? "bg-red-500" : "bg-white"
                } text-gray-600`}
              >
                {index + 1}
              </a>
            </li>
          ))}
          <li className="cursor-pointer">
            <a
              onClick={() =>
                currentPage < totalPages && paginate(currentPage + 1)
              }
              className="rounded-full px-4 py-2 text-gray-300 dark:text-gray-600"
            >
              Next
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Pagination;
