import React from "react";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-9xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-pink-600">
        404
      </h1>
      <p className="text-2xl font-bold text-gray-700 mt-4 tracking-wider" style={{ wordSpacing: '0.3rem' }}>
        Oops! Page not found.
      </p>
      <p className="text-lg text-gray-500 mt-2">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <p className="font-bold text-center text-4xl">YASH OVER FLOW</p>
      <Link
        to="/"
        className="mt-6 px-4 py-2 text-lg font-semibold text-white bg-blue-500 rounded hover:bg-blue-600"
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default NotFoundPage;
