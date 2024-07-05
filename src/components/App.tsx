import {
    AboutMe,
    Contact,
    HeroSection,
    Portfolio,
    Experience,
    NavBar,
} from "../sections";

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
