import React from "react";

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

function AuthWrapper({children}) {
    return (
        <>
            <section className="flex flex-col md:flex-row bg-[#121212]" style={bgGradient}>
                <div className="hidden lg:block w-full md:w-1/2 xl:w-2/3 min-h-screen overflow-hidden relative">
                    <div style={bannerImage}>
                        <div style={bannerOverlay}></div>
                    </div>
                </div>

                <div className="w-full md:max-w-xl lg:w-1/2 md:mx-auto xl:w-1/3 p-6 lg:p-16 xl:p-12 min-h-screen block lg:flex items-center">
                    {children}
                </div>
            </section>
        </>
    )
}

export default AuthWrapper;