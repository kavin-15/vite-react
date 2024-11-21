import React, { useState, useRef } from "react";
import Card from "./Card";

function Foreground() {
  const [data, setData] = useState([
    {
      desc: "Card 1.",
      filesize: ".9mb",
      close: true,
      tag: { isOpen: true, tagTitle: "Download Now", tagColor: "rose" },
    },
    {
      desc: "Card 2.",
      filesize: ".9mb",
      close: false,
      tag: { isOpen: true, tagTitle: "Download Now", tagColor: "red" },
    },
    {
      desc: "Card 3.",
      filesize: ".9mb",
      close: true,
      tag: { isOpen: true, tagTitle: "Download Now", tagColor: "indigo" },
    },
  ]);

  const toggleClose = (index) => {
    setData((prevData) =>
      prevData.map((item, i) =>
        i === index ? { ...item, close: !item.close } : item
      )
    );
  };
  const containerRef = useRef(null);
  return (
    <div ref={containerRef} className="fixed top-0 left-0 z-[3] w-full h-full flex gap-10 flex-wrap p-5">
      {data.map((item, index) => (
        <Card key={index} data={item} index={index} toggleClose={toggleClose} dragConstraints={containerRef} />
      ))}
    </div>
  );
}

export default Foreground;
