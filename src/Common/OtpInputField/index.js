import React from "react";
import OTPInput from "react-otp-input";

function OtpInputField({
    value,
    onChange = () => {}
}){
    return(
        <OTPInput
            inputType="number"
            value={value}
            onChange={onChange}
            numInputs={6}
            renderInput={(props, index) => <input autoFocus={index === 0} {...props} />}
            containerStyle="grid grid-cols-6 justify-between gap-2 sm:gap-6 lg:gap-4"
            inputStyle="!w-full !px-0 py-3 rounded-lg bg-[#ffffff21] mt-1 text-white focus:bg-[#ffffff30] focus:outline-none transition delay-0 duration-300 border border-transparent focus:border-indigo-400"
        />
    )
}

export default OtpInputField;