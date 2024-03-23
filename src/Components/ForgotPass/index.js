import React from "react";
import { useNavigate } from 'react-router-dom';
import { PATH } from "../../Utils/Constant";
import AuthWrapper from "../../Common/AuthWrapper";
import InputField from "../../Common/InputField";
import Button from "../../Common/Button";

function ForgotPass() {

    const navigate = useNavigate();

    return (
        <AuthWrapper title="Needed Almonds?">
            <div className="mt-6">
                <InputField
                    label="Email Address"
                    type="email"
                    id="email"
                    placeholder="Enter Email Address"
                    autoFocus
                />

                <Button
                    title="Send OTP"
                    className="mt-10"
                    onClick={() => navigate(PATH.otpVerification)}
                />
            </div>
        </AuthWrapper>
    )
}

export default ForgotPass;