export const HeroSection = () => {
    return (
        <div className="flex justify-center sm:justify-start items-center h-screen w-screen min-w-[320px]">
            {/* Background image */}
            <div className="absolute inset-0 z-0 bg-hero-image bg-cover bg-center"></div>

            {/* Overlay */}
            <div className="absolute inset-0 z-10 bg-black opacity-15"></div>

            <div className="relative z-20 dynamic-padding text-white">
                <h3 className="text-7xl">Angelo Gentile</h3>
                <br />
                <h1 className="text-2xl">
                    Software Engineer
                    <span className="text-amber-600 text-3xl"> ||| </span>
                    Restaurant Enthusiast
                </h1>
            </div>
        </div>
    );
};
