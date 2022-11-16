import { useState } from "react";
import { HeaderSection, HeaderSectionContainer } from "./Header.styled";

function Header() {
    const [toggleMenu, setToggleMenu] = useState(false);
    const handleToggle = () => {
        setToggleMenu(!toggleMenu);
    };
    const handleClose = () => {
        setToggleMenu(false);
    };
    return (
        <HeaderSection>
            <HeaderSectionContainer>
                <h2>BF</h2>
                <nav className={toggleMenu ? "nav_menu--active" : "nav_menu"}>
                    <ul onClick={handleClose}>
                        <li>
                            <a href="#beginning">Inicio</a>
                        </li>
                        <li>
                            <a href="#AboutMe">Sobre Mí</a>
                        </li>
                        <li>
                            <a href="#Skills">Habilidades</a>
                        </li>
                        <li>
                            <a href="#Projects">Proyectos</a>
                        </li>
                        <li>
                            <a href="#Contact">Contacto</a>
                        </li>
                    </ul>
                </nav>
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
