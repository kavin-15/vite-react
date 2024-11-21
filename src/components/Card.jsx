import React from "react";
import { FaRegFileAlt } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";
import { GoIssueClosed } from "react-icons/go";
import {motion} from "framer-motion";

function Card({ data, index, toggleClose, dragConstraints }) {
  return (
    <motion.div drag dragConstraints={dragConstraints} whileDrag={{scale:1.5}}className="relative flex-shrink-0 w-60 h-72 rounded-[40px] bg-zinc-900/90 text-zinc-500 p-5 overflow-hidden">
      <FaRegFileAlt />
      <p className="text-sm mt-5 font-semibold leading-tight">{data.desc}</p>
      <div className="footer absolute bottom-0 left-0 w-full">
        <div className="flex items-center justify-between mb-1 px-5 py-3">
          <h5>{data.filesize}</h5>
          <button
            className={`w-6 h-6 rounded-full flex items-center justify-center cursor-pointer ${
              data.tag.tagColor ? `bg-${data.tag.tagColor}-400` : "bg-gray-400"
            }`}
            onClick={() => toggleClose(index)} // Call toggleClose on click
          >
            {data.close ? <GoIssueClosed color="#000" /> : <LuDownload color="#000" />}
          </button>
        </div>
        {data.tag.isOpen && (
          <div
            className={`tag w-full h-[35px] py-4 px-12 flex items-center justify-center text-zinc-900 bg-${data.tag.tagColor}-400`}
          >
            <h3 className="text-md">{data.tag.tagTitle}</h3>
          </div>
        )}
      </div>
    </motion.div>
  );
}

export default Card;
