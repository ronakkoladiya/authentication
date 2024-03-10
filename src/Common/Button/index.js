import React from "react";

function Button({
    title,
    className,
    startIcon,
    ...props
}) {
    return (
        <button
            className={`w-full block bg-indigo-500 hover:bg-indigo-600 text-white font-semibold rounded-lg px-4 py-3 transition delay-0 duration-300 ${className}`}
            {...props}
        >
            <div className="flex items-center justify-center">
                {startIcon}
                <span>{title || "Button"}</span>
            </div>
        </button>
    )
}

export default Button;