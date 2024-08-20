import React from "react";
import { Link } from "react-router-dom";

const Sidebaritem = ({ isHovered }) => {
  const data = [
    { name: "Dasboard", src: "/dashboard" },
    { name: "Analytics", src: "/analytics" },
    { name: "DailyEntry", src: "/dailytransactions" },
    { name: "Settings", src: "/settings" },
  ];

  return (
    <>
      {data.map((item, index) => (
        <Link to={item.src} key={index}>
          <a
            className={`flex  pl-3  items-start rounded-md text-gray-100 hover:bg-gray-700 px-1 py-1`}
          >
          

            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>

            {isHovered && item.name }

          </a>

        </Link>
      ))}
    </>
  );
};

export default Sidebaritem;
