import React from "react";
import LandingText from "../Component/LandingPage/LandingText";




const HomePage = () => {
  
  return (
    <>
     <div className="flex flex-col items-center justify-center h-screen space-y-4">
        <LandingText text1="YOF" text2="Yash Over Flow" />
      </div>
    </>
  );
};

export default HomePage;
