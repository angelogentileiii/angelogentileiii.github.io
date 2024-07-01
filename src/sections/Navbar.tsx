export const NavBar = () => {
    return (
        <header id="navBar" className="nav--bar">
            <div>
                <a href="#aboutMe">About</a>
            </div>
            <div>
                <a href="#experience">Experience</a>
            </div>
            <div>
                <a href="#portfolio">Portfolio</a>
            </div>
            <div>
                <a href="#contact">Get In Touch</a>
            </div>
            <div>
                <a
                    href="/assets/pdfs/AGIII-Technical-Resume.pdf"
                    type="application/pdf"
                >
                    Resume
                </a>
            </div>
        </header>
    );
};
