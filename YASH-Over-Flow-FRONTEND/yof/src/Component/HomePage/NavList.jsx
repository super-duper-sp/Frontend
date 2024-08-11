import React, { useState } from 'react';

import HomeIcon from '@mui/icons-material/Home';

const NavList = () => {
 
  const [activeIndex, setActiveIndex] = useState(0);
  const navItems = [
    { href: "#", icon: <HomeIcon /> },
    { href: "#", icon: <HomeIcon /> },
    { href: "#", icon: <HomeIcon /> },
    { href: "#", icon: <HomeIcon /> },
    { href: "#", icon: <HomeIcon /> }
  ];
  
  

  return (
    <ul className="m-6 space-y-4">
    {navItems.map((item, index) => (
      <li
        key={index}
        className={`nav-item relative block ${
          index === activeIndex ? 'bg-blue-500 text-white active' : 'bg-gray-200 text-gray-800'
        } rounded-lg cursor-pointer`}
        onClick={() => setActiveIndex(index)}
      >
        <b className="absolute top-[-15px] h-[15px] w-full hidden bg-white" />
        <b className="absolute bottom-[-15px] h-[15px] w-full hidden bg-white" />
        <a
          href={item.href}
          className="relative flex flex-row items-center justify-center text-white text-lg py-4 ml-2 rounded-tl-[20px] rounded-bl-[20px]"
        >
          <span className="nav-icon mr-2">{item.icon}</span>
          <span className="nav-text">{item.text}</span>
        </a>
      </li>
    ))}
  </ul>
  );
};

export default NavList;