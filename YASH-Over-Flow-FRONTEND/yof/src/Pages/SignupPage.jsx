import React, { useState } from "react";
import { Link } from "react-router-dom";
import Message from "../Component/BlurMsg/Message"; // Adjust the import path as needed
import WaterMark from "../Component/Personalised/WaterMark";
import Logo from "../Component/Personalised/Logo";
import yash from "../Assets/yash.gif";

const SignupPage = () => {
  const [formData, setFormData] = useState({
    empId: "",
    fullName: "",
    emailAdd: "",
    password: "",
    confirmPassword: "",
  });

  const [message, setMessage] = useState(null); // New state for message

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Submit the form data to an API or perform some action
    console.log("Form Submitted", formData);

    // Show success message
    setMessage({
      text: "Registration successful!",
      color: "red",
    });
  };

  const handleCloseMessage = () => {
    setMessage(null);
  };

  return (
    <>
      <div className="flex flex-col justify-center min-h-screen py-12 bg-gray-50 sm:px-6 lg:px-8">
        <div className="flex flex-wrap lg:flex-nowrap justify-center items-start space-x-8">
          {/* Form Section */}
          <div
            className={`w-full lg:w-1/2 sm:max-w-md ${
              message ? "blur-sm" : ""
            }`}
          >
            <h2 className="mt-6 text-3xl font-extrabold text-center text-gray-900 leading-9">
              Sign up to your account
            </h2>
            <p className="mt-2 text-sm text-center text-gray-600 leading-5 max-w">
              Or{" "}
              <Link
                to="/login"
                className="font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:underline transition ease-in-out duration-150"
              >
                have an account? Log In
              </Link>
            </p>

            <div className="mt-8 sm:max-w-md">
              <div className="px-4 py-8 bg-white shadow sm:rounded-lg sm:px-10">
                <form onSubmit={handleSubmit}>
                  <div>
                    <label
                      htmlFor="empId"
                      className="block text-sm font-medium text-gray-700 leading-5"
                    >
                      Employee ID
                    </label>
                    <div className="mt-1 rounded-md shadow-sm">
                      <input
                        id="empId"
                        name="empId"
                        type="text"
                        value={formData.empId}
                        onChange={handleChange}
                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                        required
                      />
                    </div>
                  </div>

                  <div className="mt-6">
                    <label
                      htmlFor="fullName"
                      className="block text-sm font-medium text-gray-700 leading-5"
                    >
                      Full Name
                    </label>
                    <div className="mt-1 rounded-md shadow-sm">
                      <input
                        id="fullName"
                        name="fullName"
                        type="text"
                        value={formData.fullName}
                        onChange={handleChange}
                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                        required
                      />
                    </div>
                  </div>

                  <div className="mt-6">
                    <label
                      htmlFor="emailAdd"
                      className="block text-sm font-medium text-gray-700 leading-5"
                    >
                      Email Address
                    </label>
                    <div className="mt-1 rounded-md shadow-sm">
                      <input
                        id="emailAdd"
                        name="emailAdd"
                        type="email"
                        value={formData.emailAdd}
                        onChange={handleChange}
                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                        required
                      />
                    </div>
                  </div>

                  <div className="mt-6">
                    <label
                      htmlFor="password"
                      className="block text-sm font-medium text-gray-700 leading-5"
                    >
                      Password
                    </label>
                    <div className="mt-1 rounded-md shadow-sm">
                      <input
                        id="password"
                        name="password"
                        type="password"
                        value={formData.password}
                        onChange={handleChange}
                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                        required
                      />
                    </div>
                  </div>

                  <div className="mt-6">
                    <label
                      htmlFor="confirmPassword"
                      className="block text-sm font-medium text-gray-700 leading-5"
                    >
                      Confirm Password
                    </label>
                    <div className="mt-1 rounded-md shadow-sm">
                      <input
                        id="confirmPassword"
                        name="confirmPassword"
                        type="password"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                        required
                      />
                    </div>
                  </div>

                  <div className="mt-6">
                    <span className="block w-full rounded-md shadow-sm">
                      <button
                        type="submit"
                        className="flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out"
                      >
                        Sign Up
                      </button>
                    </span>
                  </div>
                </form>
              </div>
            </div>
          </div>

          {/* Lorem Ipsum Section */}
          <div className="w-full lg:w-1/2 lg:flex lg:items-center lg:justify-center">
            <div className="p-4 text-gray-700">
              <div className="flex justify-center items-center ">
                <Logo src={yash} alt="yashlogo" width="300px" />
              </div>
              <p className="mt-4 text-center">
                The premier forum web application
                designed for seamless collaboration and discussion among
                professionals. Whether you're exploring the latest advancements
                in technology or coordinating client deployments, Yash Overflow
                is your go-to platform within Yash Organization.
              </p>
            </div>
            {message && (
              <Message
                message={message.text}
                color={message.color}
                onClose={handleCloseMessage}
              />
            )}
          </div>
        </div>
      </div>
      <WaterMark />
    </>
  );
};

export default SignupPage;
