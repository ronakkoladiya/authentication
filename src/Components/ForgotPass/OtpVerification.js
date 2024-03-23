import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { PATH } from "../../Utils/Constant";
import AuthWrapper from "../../Common/AuthWrapper";
import Button from "../../Common/Button";
import OtpInputField from "../../Common/OtpInputField";

function OtpVerification() {

    const [otp, setOtp] = useState('');
    const navigate = useNavigate();

    return (
        <AuthWrapper title="Verify or Cry!">
            <div className="mt-6">
                <OtpInputField
                    value={otp}
                    onChange={setOtp}
                />

                <Button
                    title="Verify OTP"
                    className="mt-10"
                    onClick={() => navigate(PATH.login)}
                />
            </div>
        </AuthWrapper>
    )
}

export default OtpVerification;