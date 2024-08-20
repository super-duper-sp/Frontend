import { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { isTokenExpired } from "../Security/jwt/JwtService";
import { register } from "../features/Auth/AuthAction";
import Message from "../Component/BlurMsg/Message"; // Import the Message component
import Logo from "../Component/Personalised/Logo";
import yash from "../Assets/yash.gif";

export const SignupPage = () => {
    const empIdInputRef = useRef('');
    const emailInputRef = useRef('');
    const fullNameInputRef = useRef('');
    const passwordInputRef = useRef('');
    const confirmPasswordInputRef = useRef('');

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const message = useSelector((state) => state.auth.message);
    const userData = useSelector((state) => state.auth.userData);
    const [showMessage, setShowMessage] = useState(false);
    const [validationError, setValidationError] = useState(''); // State for validation errors

    useEffect(() => {
        if (message) {
            setTimeout(() => {
                setShowMessage(true);
            }, 2000); // 2 seconds delay
        }
    }, [message, navigate]);

    useEffect(() => {
        const token = userData.token;
        if (token && !isTokenExpired(token)) {
            navigate("/home");
        } else if (token && isTokenExpired(token)) {
            navigate("/register");
        }
    }, [navigate, userData]);

    function formSubmitHandler(event) {
        event.preventDefault();

        const empId = empIdInputRef.current.value.trim();
        const fullName = fullNameInputRef.current.value.trim();
        const emailAdd = emailInputRef.current.value.trim();
        const password = passwordInputRef.current.value.trim();
        const confirmPassword = confirmPasswordInputRef.current.value.trim();

        // Basic validation logic
        if (!empId || !fullName || !emailAdd || !password || !confirmPassword) {
            setValidationError("All fields are required.");
            return;
        }

        if (password !== confirmPassword) {
            setValidationError("Passwords do not match.");
            return;
        }

        // If validation passes, clear any existing errors and submit the form
        setValidationError('');

        const formData = {
            empId,
            fullName,
            emailAdd,
            password,
            confirmPassword,
        };

        console.log(formData);
        dispatch(register(JSON.stringify(formData)));
    }

    return (
        <>
            <div className="flex flex-col justify-center min-h-screen py-12 bg-gray-50 sm:px-6 lg:px-8">
                <div className="flex flex-wrap lg:flex-nowrap justify-center items-start space-x-8">
                    
                    {/* Display validation error messages */}
                    {validationError && (
                        <Message
                            message={validationError}
                            onClose={() => setValidationError('')}
                            color="red"
                        />
                    )}

                    {/* Display success or other messages */}
                    {showMessage && (
                        <Message
                            message={message}
                            onClose={() => setShowMessage(false)}
                            color="green" // Adjust the color as needed
                        />
                    )}

                    {/* Form Section */}
                    <div
                        className={`w-full lg:w-1/2 sm:max-w-md ${
                            showMessage || validationError ? "blur-sm" : ""
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
                                <form onSubmit={formSubmitHandler}>
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
                                                ref={empIdInputRef}
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
                                                ref={fullNameInputRef}
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
                                                ref={emailInputRef}
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
                                                ref={passwordInputRef}
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
                                                ref={confirmPasswordInputRef}
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

                    {/* Logo and Description Section */}
                    <div className="w-full lg:w-1/2 lg:flex lg:items-center lg:justify-center">
                        <div className="p-4 text-gray-700">
                            <div className="flex justify-center items-center">
                                <Logo src={yash} alt="yashlogo" width="300px" />
                            </div>
                            <p className="mt-4 text-center">
                                The premier forum web application designed for seamless
                                collaboration and discussion among professionals. Whether you're
                                exploring the latest advancements in technology or coordinating
                                client deployments, Yash Overflow is your go-to platform within
                                Yash Organization.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
