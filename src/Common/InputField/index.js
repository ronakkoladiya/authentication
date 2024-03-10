import React, { useState } from "react";
import { PiEyeClosed, PiEye  } from "react-icons/pi";

function InputField({
    label,
    type,
    name,
    value,
    id,
    placeholder,
    className,
    autoFocus = false,
    labelClass,
    ...props
}) {

    const [showPassword, setShowPassword] = useState(false);

    const handleTogglePassword = () => {
        setShowPassword(prevShowPassword => !prevShowPassword);
    };

    return (
        <div className="relative">
            <label className={`block ${labelClass}`}>{label}</label>
            <input
                type={type === 'password' ? (showPassword ? "text" : "password") : type}
                id={id}
                name={name}
                value={value}
                placeholder={placeholder || `Enter Data`}
                autoFocus={autoFocus}
                className={`w-full px-4 py-3 rounded-lg bg-[#ffffff21] mt-1 text-white focus:bg-[#ffffff30] focus:outline-none transition delay-0 duration-300 ${className}`}
                {...props}
            />
            {
                type === 'password' &&
                (showPassword ? (
                    <PiEye
                        className={`text-xl absolute top-[calc(50%+14px)] right-4 translate-y-[-50%] cursor-pointer`}
                        onClick={handleTogglePassword}
                    />
                ) : (
                    <PiEyeClosed
                        className={`text-xl absolute top-[calc(50%+14px)] right-4 translate-y-[-50%] cursor-pointer`}
                        onClick={handleTogglePassword}
                    />
                ))
            }
        </div>
    )
}

export default InputField;