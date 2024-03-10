import React from "react";
import { useNavigate } from 'react-router-dom';
import AuthWrapper from "../../Common/AuthWrapper";
import InputField from "../../Common/InputField";
import Button from "../../Common/Button";
import { FcGoogle } from "react-icons/fc";

function Login() {

    const navigate = useNavigate();

    return (
        <AuthWrapper>
            <div className="w-full text-white">
                <div className="flex justify-center">
                    <img src="./Assets/logo.png" alt="" className="w-[200px] mb-0 lg:mb-5" />
                </div>
                <h1 className="text-3xl md:text-[40px] font-bold leading-tight mt-12 cursor-default text-indigo-500">Welcome Back!</h1>

                <div className="mt-6">
                    <div>
                        <InputField
                            label="Email Address"
                            type="email"
                            id="email"
                            placeholder="Enter Email Address"
                            autoFocus
                        />
                    </div>

                    <div className="mt-4">
                        <InputField
                            label="Password"
                            type="password"
                            id="password"
                            placeholder="Enter Password"
                            className="pr-10"
                        />
                    </div>

                    <div className="text-right mt-2">
                        <span className="text-sm cursor-pointer font-semibold hover:text-indigo-600 transition delay-0 duration-300">
                            Forgot Password?
                        </span>
                    </div>

                    <Button
                        title="Log In"
                        className="mt-10"
                    />
                </div>

                <Button
                    title="Log in with Google"
                    className="mt-6 bg-white hover:!bg-gray-200 !text-gray-900 border border-gray-300"
                    startIcon={<FcGoogle className="text-[26px] mr-4" />}
                />

                <p className="mt-8">
                    Need an account?{' '}
                    <span
                        className="cursor-pointer text-indigo-500 hover:text-indigo-600 font-semibold transition delay-0 duration-300"
                        onClick={() => navigate('/signup')}
                    >
                        Create an account
                    </span>
                </p>
            </div>
        </AuthWrapper>
    )
}

export default Login;