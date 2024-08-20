import React, { useState } from "react";
import Sidebaritem from "./Sidebaritem";

// import Userprofile from "../userprofile/Userprofile"

function Sidebar() {
  const [isSidebarHovered, setIsSidebarHovered] = useState(false);

  return (
    <>
      <div
        className={`hidden md:flex flex-col  gap-4 rounded-md  bg-pink-100 ${
          isSidebarHovered ? "w-48" : "w-[4rem]"
        }`}
        onMouseEnter={() => setIsSidebarHovered(true)}
        onMouseLeave={() => setIsSidebarHovered(false)}
      >
        <div className="flex items-center justify-center h-20">
          <span className="text-white font-bold uppercase">
            {/* <Userprofile isHovered={isSidebarHovered}/> */}
          </span>
        </div>


        <div className="flex flex-col flex-1 gap-3 px-2 py-2">
        <Sidebaritem isHovered={isSidebarHovered} />
        </div>
      </div>
    </>
  );
}

export default Sidebar;
