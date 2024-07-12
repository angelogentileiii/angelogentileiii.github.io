import {
    AboutMe,
    HeroSection,
    Portfolio,
    Experience,
    NavBar,
    Contact,
} from "../sections/index.sections";

const App = () => {
    return (
        <div id="App">
            <NavBar />
            <HeroSection />
            <AboutMe />
            <Experience />
            <Portfolio />
            <Contact />
        </div>
    );
};

export default App;
