import React from "react";
import { useNavigate } from 'react-router-dom';
import AuthWrapper from "../../Common/AuthWrapper";
import InputField from "../../Common/InputField";
import Button from "../../Common/Button";

function Signup() {

    const navigate = useNavigate();

    return (
        <AuthWrapper>
            <div className="w-full text-white">
                <div className="flex justify-center">
                    <img src="./Assets/logo.png" alt="" className="w-[200px] mb-0 lg:mb-5" />
                </div>
                <h1 className="text-3xl md:text-[40px] font-bold leading-tight mt-12 cursor-default text-indigo-500">Let's Sign Up!</h1>

                <div className="mt-6">
                    <div>
                        <InputField
                            label="Name"
                            type="text"
                            id="name"
                            placeholder="Enter Name"
                            autoFocus
                        />
                    </div>

                    <div className="mt-4">
                        <InputField
                            label="Email Address"
                            type="email"
                            id="email"
                            placeholder="Enter Email Address"
                        />
                    </div>

                    <div className="mt-4">
                        <InputField
                            label="Password"
                            type="password"
                            id="password"
                            placeholder="Create Password"
                            className="pr-10"
                        />
                    </div>

                    <Button
                        title="Sign Up"
                        className="mt-10"
                        onClick={() => navigate('/')}
                    />
                </div>
            </div>
        </AuthWrapper>
    )
}

export default Signup;