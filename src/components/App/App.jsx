import AboutMe from "../AboutMe/AboutMe";
import Header from "../Header/Header";
import Projects from "../Projects/Projects";
import Skills from "../Skills/Skills";
import Title from "../Title/Title";
import "./App.css";

function App() {
    return (
        <>
            <Header />
            <main className="App">
                <Title />
                <AboutMe />
                <Skills />
                <Projects />
            </main>
        </>
    );
}

export default App;
