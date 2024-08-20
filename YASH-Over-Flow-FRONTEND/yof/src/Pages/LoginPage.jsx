import {useEffect, useRef, useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import {isTokenExpired} from "../Security/jwt/JwtService";
import {useDispatch, useSelector} from "react-redux";
import {login} from "../features/Auth/AuthAction";
import {clearMessage} from "../features/Auth/AuthSlice";
import Logo from "../Component/Personalised/Logo";
import yash from "../Assets/yash.gif";
import Message from "../Component/BlurMsg/Message"; // Import the Message component

const initialForm = {
    email: null,
    password: null
}

export const LoginPage = () => {
    const emailInputRef = useRef('');
    const passwordInputRef = useRef('');
    const [loginData, setLoginData] = useState(initialForm);
    const [showSuccess, setShowSuccess] = useState(false); // State for showing success message
    const [showError, setShowError] = useState(''); // State for showing error message
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const userData = useSelector((state) => state.auth.userData);

    useEffect(() => {
        const token = userData.token;
        if (token && !isTokenExpired(token)) {
            setShowSuccess(true);
            setTimeout(() => navigate("/home"), 1500); // Redirect to home after 1.5 seconds
        } else {
            console.info('Token not found or expired');
            if (userData.message) {
                setShowError(userData.message); // Display error message
            }
            navigate("/login");
        }
        return () => {
            if (userData.status === "FAILED")
                dispatch(clearMessage());
        }
    }, [navigate, userData, dispatch]);

    function submitForm(event) {
        event.preventDefault();
        const email = emailInputRef.current.value;
        const password = passwordInputRef.current.value;

        setLoginData({
            email: email,
            password: password,
        });
    }

    useEffect(() => {
        if (loginData.email && loginData.password) {
            console.log("Trying logging in...");
            dispatch(login(JSON.stringify(loginData)));
        }
    }, [loginData, navigate, dispatch]);

    return (
        <>
            {showSuccess && (
                <Message
                    message="You have successfully logged in."
                    onClose={() => setShowSuccess(false)}
                    color="green"
                />
            )}

            {showError && (
                <Message
                    message={showError}
                    onClose={() => setShowError('')}
                    color="red"
                />
            )}

            <div className={`flex flex-col justify-center min-h-screen py-12 bg-gray-50 sm:px-6 lg:px-8 ${showSuccess ? "blur-sm" : ""}`}>
                <div className="flex flex-wrap lg:flex-nowrap justify-center items-start space-x-8">
                    {/* Form Section */}
                    <div className={`w-full lg:w-1/2 sm:max-w-md`}>
                        <h2 className="mt-6 text-3xl font-extrabold text-center text-gray-900 leading-9">
                            Log in to your account
                        </h2>
                        <p className="mt-2 text-sm text-center text-gray-600 leading-5 max-w">
                            Or{" "}
                            <Link
                                to="/signup"
                                className="font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:underline transition ease-in-out duration-150"
                            >
                                create a new account
                            </Link>
                        </p>

                        <div className="mt-8 sm:max-w-md">
                            <div className="px-4 py-8 bg-white shadow sm:rounded-lg sm:px-10">
                                <form onSubmit={submitForm}>
                                    <div>
                                        <label
                                            htmlFor="email"
                                            className="block text-sm font-medium text-gray-700 leading-5"
                                        >
                                            Email address
                                        </label>
                                        <div className="mt-1 rounded-md shadow-sm">
                                            <input
                                                id="email"
                                                name="email"
                                                type="email"
                                                ref={emailInputRef}
                                                required
                                                autoFocus
                                                className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
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
                                                ref={passwordInputRef}
                                                type="password"
                                                required
                                                className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                                            />
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-between mt-6">
                                        <div className="text-sm leading-5">
                                            <a
                                                href="/#"
                                                className="font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:underline transition ease-in-out duration-150"
                                            >
                                                Forgot your password?
                                            </a>
                                        </div>
                                    </div>
                                    <div className="mt-6">
                                        <span className="block w-full rounded-md shadow-sm">
                                            <button
                                                type="submit"
                                                className="flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out"
                                            >
                                                Sign in
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
