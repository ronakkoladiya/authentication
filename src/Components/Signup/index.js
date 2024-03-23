import React from "react";
import { useNavigate } from 'react-router-dom';
import { PATH } from "../../Utils/Constant";
import AuthWrapper from "../../Common/AuthWrapper";
import InputField from "../../Common/InputField";
import Button from "../../Common/Button";

function Signup() {

    const navigate = useNavigate();

    return (
        <AuthWrapper title="Let's Sign Up!">
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
                    onClick={() => navigate(PATH.login)}
                />
            </div>
        </AuthWrapper>
    )
}

export default Signup;