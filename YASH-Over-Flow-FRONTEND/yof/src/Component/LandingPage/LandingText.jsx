import React from "react";

const LandingText = ({ text1, text2 }) => {
  return (
    <div className="flex flex-col items-center justify-center h-screen space-y-4">
      <h1 class="text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
        {text1}
      </h1>
      <p className="text-2xl font-bold text-gray-700 ">{text2}</p>
    </div>
  );
};

export default LandingText;