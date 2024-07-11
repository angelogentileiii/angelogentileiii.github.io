import TechStack from "../components/TechStack";

export const AboutMe: React.FC = () => {
    return (
        <section id="about" className="section--container">
            <div className="about--section--content--box">
                <div className="about--section--content">
                    <h1 className="about--section--title">
                        {/* <span className="about--section--title--color">
                            Get to Know Me
                        </span>{" "}
                        <br /> */}
                    </h1>
                    <p className="about--section--description">
                        As a full-stack software engineer and former digital
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
                </div>
                <div className="about--section-tech">
                    <TechStack />
                </div>
                <button className="btn btn-primary">Get in Touch</button>
            </div>
            <div className="about--section--image"></div>
        </section>
    );
};
