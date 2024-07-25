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
                    className="flex w-auto justify-center items-center mb-16 mx-auto lg:mx-8 lg:mb-0 lg:w-2/5 h-auto rounded-full bg-amber-600 bg-opacity-15"
                >
                    <img
                        src="/assets/img/Angelo-Profile.png"
                        alt="Profile image of Angelo Gentile III"
                        className="flex max-h-[500px] lg:h-full lg:aspect-auto lg:max-h-full"
                    />
                </div>
                <div className="pl-4 text-start mx-auto lg:w-3/5 lg:text-left">
                    <p className="text-base mb-8">
                        My name is{" "}
                        <span className="text-amber-600">Angelo Gentile</span>,
                        a full-stack software engineer and former IATSE Local
                        600 camera and digital imaging technician, with over 9
                        years of thriving in the dynamic, high-pressure
                        environment of the multi-billion dollar film and
                        television industry. This experience has fueled my
                        determination and honed my detail-oriented nature,
                        driving me to transition into a more technology-forward
                        role where I can merge my creative and technical
                        expertise.
                        <br />
                        <br />I am passionate about designing clean,
                        maintainable code that effectively meets stakeholders'
                        needs. The demanding nature of the film and television
                        industry has sharpened my communication and team skills,
                        making me a reliable and collaborative team player. As a
                        technical developer with the heart of an artist, I am
                        committed to building strong connections and delivering
                        exceptional results.
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
