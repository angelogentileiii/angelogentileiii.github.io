export const AboutMe = (): JSX.Element => {
    return (
        <section id="about" className="section--container">
            <div className="about--section--content--box">
                <div className="about--section--content">
                    <h1 className="about--section--title">
                        <span className="about--section--title--color">
                            Get to Know Me
                        </span>{" "}
                        <br />
                    </h1>
                    <p className="about--section--description">
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Dolorum deleniti eius, a mollitia quasi tenetur
                        ipsum voluptate aspernatur porro. Voluptatum repudiandae
                        blanditiis iure dignissimos! Exercitationem voluptate
                        illum optio cum inventore.
                        <br />
                        <br />
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Enim nam amet aperiam alias sapiente inventore molestiae
                        eaque omnis! Quas illum distinctio nam dolore, quam
                        reiciendis! Officia accusantium reiciendis ut rerum!
                    </p>
                </div>
                <div className="about--section-tech">
                    <div>TECH STACK ITEMS</div>
                </div>
                <button className="btn btn-primary">Get in Touch</button>
            </div>
            <div className="about--section--image"></div>
        </section>
    );
};
