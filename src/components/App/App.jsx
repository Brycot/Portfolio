import AboutMe from "../AboutMe/AboutMe";
import ContactMe from "../ContactMe/ContactMe";
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
                <ContactMe />
            </main>
            <footer>Coded with 💙 by Brycot</footer>
        </>
    );
}

export default App;
