import React from "react";
import { useState } from "react";
export function ContactBoxes() {
  const [hoveredBox, setHoveredBox] = useState<number | null>(null);

  const boxClasses = (isHovered: boolean) =>
    `flex flex-col gap-[5px] items-start rounded-[20px] p-[60px_35px] border border-[#0d376f] bg-[#010F27] transition-shadow duration-300 ${
      isHovered ? "shadow-[10px_10px_15px_rgba(255,191,0,0.69)]" : ""
    }`;

  return (
    <>
      {/* Reach Us */}
      <div
        className={boxClasses(hoveredBox === 1)}
        onMouseEnter={() => setHoveredBox(1)}
        onMouseLeave={() => setHoveredBox(null)}
      >
        <h2 className="text-white text-[30px] font-bold">Reach Us</h2>
        <p className="text-[#ffffffb2] text-[20px]">
          Mail : <span>contact@mygupio.com</span>
        </p>
        <p className="text-[#ffffffb2] text-[20px]">
          Phone : <span>8884446720</span>
        </p>
      </div>

      {/* Operational Timings */}
      <div
        className={boxClasses(hoveredBox === 2)}
        onMouseEnter={() => setHoveredBox(2)}
        onMouseLeave={() => setHoveredBox(null)}
      >
        <h2 className="text-white text-[30px] font-bold">
          Operational Timings
        </h2>
        <p className="text-[#ffffffb2] text-[20px]">Monday to Saturday:</p>
        <p className="text-[#ffffffb2] text-[20px]">
          09:30AM - 6:30 PM (IST)
        </p>
      </div>
    </>
  );
}
