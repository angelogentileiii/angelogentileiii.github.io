import {
    AboutMe,
    HeroSection,
    Portfolio,
    Experience,
    NavBar,
    Contact,
    Footer,
} from "../sections/index.sections";

const App = () => {
    return (
        <div id="App" className="font-sans bg-gray-50 bg-opacity-50">
            <NavBar />
            <HeroSection />
            <AboutMe />
            <Experience />
            <Portfolio />
            <Contact />
            <Footer />
        </div>
    );
};

export default App;
