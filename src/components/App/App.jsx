import AboutMe from "../AboutMe/AboutMe";
import Header from "../Header/Header";
import Title from "../Title/Title";
import "./App.css";

function App() {
    return (
        <>
            <Header />
            <main className="App">
                <Title />
                <AboutMe />
            </main>
        </>
    );
}

export default App;
