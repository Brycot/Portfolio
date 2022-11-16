import React from "react";
import {
    ContactMeSection,
    Title,
    SubTitle,
    ContactButton,
    SocialLinkContainer,
} from "./ContactMe.styled";

import github from "../../assets/github.svg";
import linkedin from "../../assets/linkedin.svg";
import twitter from "../../assets/twitter.svg";

function ContactMe() {
    return (
        <ContactMeSection id="Contact">
            <div className="Contact__container">
                <div className="Contact__Text_Container">
                    <Title>¿Quieres contactar conmigo?</Title>
                    <SubTitle>¡Hablemos!</SubTitle>
                </div>
                <SocialLinkContainer>
                    <a
                        href="https://github.com/Brycot"
                        target="_blank"
                        className="socialLink"
                    >
                        <img src={github} alt="" />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/bryan-ismael-figueroa-quiroz-15701a228/"
                        target="_blank"
                        className="socialLink"
                    >
                        <img src={linkedin} alt="" />
                    </a>
                    <a
                        href="https://twitter.com/braico_m"
                        target="_blank"
                        className="socialLink"
                    >
                        <img src={twitter} alt="" />
                    </a>
                </SocialLinkContainer>
                <ContactButton
                    href="mailto: bryalquiroz@gmail.com"
                    target="_blank"
                >
                    Contactar
                </ContactButton>
            </div>
        </ContactMeSection>
    );
}

export default ContactMe;
