import { projectsList } from "@/consts/card.conts";
import React from "react";
import { ImCross } from "react-icons/im";

function ShowModal({
  index,
  handleModal,
}: {
  index: number;
  handleModal: any;
}) {
  return (
    <div className="h-screen w-screen bg-black bg-opacity-50 fixed top-0 left-0 grid place-items-center z-[99]">
      <div className="relative p-4 w-full max-w-4xl  max-h-full">
        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
          <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              {projectsList[index].title}
            </h3>
            <button
              onClick={handleModal}
              type="button"
              className=" text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
              data-modal-hide="default-modal"
            >
              <ImCross className="w-3 h-3" />
              <span className="sr-only">Close modal</span>
            </button>
          </div>
          <div className="p-4 md:p-5 space-y-4">
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              {projectsList[index].details}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShowModal;
