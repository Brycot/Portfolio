import { useState } from "react";
import { HeaderSection, HeaderSectionContainer } from "./Header.styled";

function Header() {
    const [toggleMenu, setToggleMenu] = useState(false);
    const handleToggle = () => {
        setToggleMenu(!toggleMenu);
    };
    return (
        <HeaderSection>
            <HeaderSectionContainer>
                <h2>BF</h2>
                {/* <nav>
                    <li>
                        <ul>Sobre Mí</ul>
                        <ul>Habilidades</ul>
                        <ul>Proyectos</ul>
                    </li>
                </nav> */}
                <button
                    onClick={handleToggle}
                    className={
                        toggleMenu
                            ? "nav__hamburguer--active"
                            : "nav__hamburguer"
                    }
                >
                    <div></div>
                    <div></div>
                    <div></div>
                </button>
            </HeaderSectionContainer>
        </HeaderSection>
    );
}

export default Header;
