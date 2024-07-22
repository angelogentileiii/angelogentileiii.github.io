import { TechStack } from "../components/index.components";

export const AboutMe: React.FC = () => {
    return (
        <section
            id="about"
            className="block justify-start items-center min-h-screen h-auto min-w-[320px] p-4"
        >
            <div className="text-3xl font-bold pt-16 lg:pt-28 dynamic-padding">
                <h3>&mdash; Hi, it's a pleasure to meet you!</h3>
            </div>
            <div className="flex flex-col lg:flex-row items-center w-full lg:mb-20 pt-16 pb-4 px-4">
                <div
                    id="profileimage"
                    className="flex justify-center items-center mb-16 mx-auto lg:mr-16 lg:mb-0 lg:w-2/5 h-auto"
                >
                    <img
                        src="/assets/img/Angelo-Profile.png"
                        alt="Profile image of Angelo Gentile III"
                        className="flex w-full max-h-[500px] lg:h-full lg:aspect-auto lg:max-h-full rounded-lg"
                    />
                </div>
                <div className="pl-4 text-start mx-auto lg:w-3/5 lg:text-left">
                    <p className="text-base mb-8">
                        My name is{" "}
                        <span className="text-amber-600">Angelo Gentile</span>{" "}
                        and as a full-stack software engineer and former digital
                        imaging technician, I have spent over 9 years thriving
                        in the dynamic, high-pressure environment of the
                        multi-billion dollar film and television industry. This
                        experience has fueled my determination and honed my
                        detail-oriented nature, driving me to transition into a
                        more technology-forward role where I can merge my
                        creative and technical expertise.
                        <br />
                        <br />
                        My passion lies in designing clean, maintainable code
                        that meets stakeholders' needs effectively. The
                        demanding nature of the film and television industry has
                        sharpened my communication and team skills, making me a
                        reliable and collaborative team player. I am a technical
                        developer with the heart of an artist, committed to
                        building strong connections and delivering exceptional
                        results.
                    </p>
                    <a
                        className="mt-4 bg-amber-600 hover:bg-opacity-80 text-white py-2 px-4 rounded-md"
                        href="#contact"
                    >
                        Let's Connect!
                    </a>
                </div>
            </div>
            <TechStack />
        </section>
    );
};
