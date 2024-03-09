import React from "react";
import { useNavigate } from 'react-router-dom';

const bannerImage = {
    content: "",
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'url(https://source.unsplash.com/random)',
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center"
};

const bannerOverlay = {
    content: "",
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'linear-gradient(to bottom left, #4F46E5, #000000)',
    opacity: 0.9,
    mixBlendMode: "multiply"
}

const bgGradient = {
    background: 'linear-gradient(to bottom right, rgb(29 26 90), rgb(0, 0, 0))',
    mixBlendMode: 'multiply',
};

function Login() {

    const navigate = useNavigate();

    return (
        <>
            <section className="flex flex-col md:flex-row bg-[#121212]" style={bgGradient}>
                <div className="hidden lg:block w-full md:w-1/2 xl:w-2/3 min-h-screen overflow-hidden relative">
                    <div style={bannerImage}>
                        <div style={bannerOverlay}></div>
                    </div>
                </div>

                <div className="w-full md:max-w-xl lg:w-1/2 md:mx-auto xl:w-1/3 p-6 lg:p-16 xl:p-12 min-h-screen flex items-center">

                    <div className="w-full text-white">

                        <div className="flex justify-center">
                            <img src="./Assets/logo.png" alt="" className="w-[200px] mb-0 lg:mb-5" />
                        </div>
                        <h1 className="text-3xl md:text-[40px] font-bold leading-tight mt-12 cursor-default text-indigo-500">Let's Sign Up!</h1>

                        <form className="mt-6" action="#" method="POST">
                            <div>
                                <label className="block">Name</label>
                                <input
                                    type="text"
                                    name=""
                                    id=""
                                    placeholder="Enter Name"
                                    className="w-full px-4 py-3 rounded-lg bg-[#ffffff21] mt-2 text-white focus:bg-[#ffffff30] focus:outline-none transition delay-0 duration-300"
                                    autoFocus
                                    autoComplete="name"
                                    required
                                />
                            </div>

                            <div className="mt-4">
                                <label className="block">Email Address</label>
                                <input
                                    type="email"
                                    name=""
                                    id=""
                                    placeholder="Enter Email Address"
                                    className="w-full px-4 py-3 rounded-lg bg-[#ffffff21] mt-2 text-white focus:bg-[#ffffff30] focus:outline-none transition delay-0 duration-300"
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
                                    placeholder="Create Password"
                                    minLength="6"
                                    className="w-full px-4 py-3 rounded-lg bg-[#ffffff21] mt-2 text-white focus:bg-[#ffffff30] focus:outline-none transition delay-0 duration-300"
                                    required
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full block bg-indigo-500 hover:bg-indigo-600 focus:bg-indigo-600 text-white font-semibold rounded-lg px-4 py-3 mt-12 transition delay-0 duration-300"
                                onClick={() => navigate('/')}
                            >
                                Sign Up
                            </button>
                        </form>

                    </div>
                </div>
            </section>
        </>
    )
}

export default Login;