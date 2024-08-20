import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  LogOut,
  LayoutDashboard,
  Clock3,
  BarChart2,
  ArrowRight,
  ArrowRightLeft,
  HelpCircleIcon,
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector,useDispatch } from "react-redux";
import { logout } from "../../features/Auth/AuthAction";

const navlinks = [
  {
    name: "Dashboard",
    icon: LayoutDashboard,
    path: "/dashboard", // Add path for each navigation item
  },

  {
    name: "Analytics",
    icon: BarChart2,
    path: "/analytics",
  },
  {
    name: "DailyEntry",
    icon: ArrowRightLeft,
    path: "/dailytransactons",
  },
  {
    name: "Settings",
    icon: HelpCircleIcon,
    path: "/settings",
  },
  {
    name: "Clock",
    icon: Clock3,
    path: "/clock",
  },
];

const variants = {
  expanded: { width: "20%" },
  nonExpanded: { width: "6%" },
};
const NavigationBar = () => {
  const [activeNavIndex, setActiveNavIndex] = useState(0);
  const [isExpanded, setIsExpanded] = useState(true);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const userData = useSelector((state) => state.auth.userData);

  const logoutHandler = () => {
    dispatch(logout());
    navigate("/");
  };

  return (
    <motion.div
      animate={isExpanded ? "expanded" : "nonExpanded"}
      variants={variants}
      className={
        "py-12 flex flex-col border-r-2 w-1/5 h-screen relative" +
        (isExpanded ? " px-10" : " px-4")
      }
    >
      <div className=" flex space-x-3 items-center">
        {/* <img className="h-7 w-9" src={""} /> */}
        <span className={isExpanded ? "block" : "hidden"}>
          <div className=" text-3xl font-extrabold text-center text-gray-900 leading-9">
            YashOverFlow
          </div>
        </span>
      </div>

      <div
        onClick={() => setIsExpanded(!isExpanded)}
        class="w-5 h-5 bg-[#FF8C8C] rounded-full absolute top-16 -right-[10px] flex justify-center items-center"
      >
        <ArrowRight class="w-4 text-white" />
      </div>

      <div className="mt-10 flex flex-col space-y-8">
        {navlinks.map((item, index) => (
          <Link key={index} to={item.path}>
            <div
              className={
                "flex p-2 space-x-3 rounded " +
                (activeNavIndex === index
                  ? " bg-[#FF8C8C] text-white font-semibold"
                  : " ")
              }
              onClick={() => setActiveNavIndex(index)}
            >
              <item.icon />
              <span className={isExpanded ? "block" : "hidden"}>
                {item.name}
              </span>
            </div>
          </Link>
        ))}
      </div>
      
      {userData ? (
      <div onClick={logoutHandler} className="flex p-2 mt-6 space-x-3 rounded">
        <LogOut />
        <span className={isExpanded ? "block" : "hidden"}>LogOut</span>
      </div>
      ):("")}


    </motion.div>
  );
};

export default NavigationBar;
