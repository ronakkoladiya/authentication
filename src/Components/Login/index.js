import React from "react";
import { Link } from 'react-router-dom';

const containerStyle = {
    position: 'relative',
};

const overlayStyle = {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'linear-gradient(to bottom left, #4F46E5, #000000)',
    opacity: 0.9,
    zIndex: 1,  
    mixBlendMode: 'multiply',
};

const bgGradient = {
    background: 'linear-gradient(to bottom right, rgb(29 26 90), rgb(0, 0, 0))',
    mixBlendMode: 'multiply',
};

function Login() {
    return (
        <>
            <section className="flex flex-col md:flex-row h-screen items-center bg-[#121212]" style={bgGradient}>
                <div className="hidden lg:block w-full md:w-1/2 xl:w-2/3 h-screen" style={containerStyle}>
                    <div style={overlayStyle}></div>
                    <img src="https://source.unsplash.com/random" alt="" className="w-full h-full object-cover" />
                </div>

                <div className="w-full md:max-w-md lg:max-w-full md:mx-auto md:w-1/2 xl:w-1/3 h-screen px-6 lg:px-16 xl:px-12 flex items-center justify-center">

                    <div className="w-full h-screen text-white">

                        <div className="flex justify-center mt-10 lg:mt-20">
                            <img src="./Assets/logo.png" alt="" className="w-[200px] mb-0 lg:mb-5" />
                        </div>
                        <h1 className="text-3xl md:text-[40px] font-bold leading-tight mt-12 cursor-default text-indigo-500">Welcome Back!</h1>

                        <form className="mt-6" action="#" method="POST">
                            <div>
                                <label className="block">Email Address</label>
                                <input
                                    type="email"
                                    name=""
                                    id=""
                                    placeholder="Enter Email Address"
                                    className="w-full px-4 py-3 rounded-lg bg-[#ffffff21] mt-2 text-white focus:bg-[#ffffff30] focus:outline-none transition delay-0 duration-300"
                                    autoFocus
                                    autoComplete="email"
                                    required
                                />
                            </div>

                            <div className="mt-4">
                                <label className="block">Password</label>
                                <input
                                    type="password"
                                    name=""
                                    id=""
                                    placeholder="Enter Password"
                                    minLength="6"
                                    className="w-full px-4 py-3 rounded-lg bg-[#ffffff21] mt-2 text-white focus:bg-[#ffffff30] focus:outline-none transition delay-0 duration-300"
                                    required
                                />
                            </div>

                            <div className="text-right mt-2">
                                <Link to="#" className="text-sm font-semibold hover:text-indigo-600 focus:text-indigo-600 transition delay-0 duration-300">
                                    Forgot Password?
                                </Link>
                            </div>

                            <button
                                type="submit"
                                className="w-full block bg-indigo-500 hover:bg-indigo-600 focus:bg-indigo-600 text-white font-semibold rounded-lg px-4 py-3 mt-10 transition delay-0 duration-300"
                            >
                                Log In
                            </button>
                        </form>

                        <button
                            type="button"
                            className="w-full block bg-white hover:bg-gray-200 focus:bg-gray-200 text-gray-900 font-semibold rounded-lg px-4 py-3 border border-gray-300 mt-6 transition delay-0 duration-300"
                        >
                            <div className="flex items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" className="w-6 h-6" viewBox="0 0 48 48">
                                    <defs>
                                        <path id="a" d="M44.5 20H24v8.5h11.8C34.7 33.9 30.1 37 24 37c-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.6 4.1 29.6 2 24 2 11.8 2 2 11.8 2 24s9.8 22 22 22c11 0 21-8 21-22 0-1.3-.2-2.7-.5-4z" />
                                    </defs>
                                    <clipPath id="b">
                                        <use xlinkHref="#a" overflow="visible" />
                                    </clipPath>
                                    <path clipPath="url(#b)" fill="#FBBC05" d="M0 37V11l17 13z" />
                                    <path clipPath="url(#b)" fill="#EA4335" d="M0 11l17 13 7-6.1L48 14V0H0z" />
                                    <path clipPath="url(#b)" fill="#34A853" d="M0 37l30-23 7.9 1L48 0v48H0z" />
                                    <path clipPath="url(#b)" fill="#4285F4" d="M48 48L17 24l-4-3 35-10z" />
                                </svg>
                                <span className="ml-4">Log in with Google</span>
                            </div>
                        </button>

                        <p className="mt-8">
                            Need an account?{' '}
                            <Link to="/signup" className="text-indigo-500 hover:text-indigo-600 font-semibold transition delay-0 duration-300">
                                Create an account
                            </Link>
                        </p>

                    </div>
                </div>
            </section>
        </>
    )
}

export default Login;