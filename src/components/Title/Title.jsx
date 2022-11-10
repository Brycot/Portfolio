import React from "react";
import styled, { keyframes } from "styled-components";
import blob from "../../assets/blobanimation.svg";
import blobTwo from "../../assets/blobanimationtwo.svg";
import github from "../../assets/github.svg";
import linkedin from "../../assets/linkedin.svg";
import twitter from "../../assets/twitter.svg";
import profilePic from "../../assets/profilePic.webp";
// import scroll from "../../assets/scroll-bar.png";

const translateMobile = keyframes`
    0%,
    100% {
        transform: translate(0px, 0px) rotate(0);
    }
    25% {
        transform: translate(100px, 300px) rotate(45deg);
    }
    75% {
        transform: translate(-100px, 250px) rotate(-45deg);
    }
`;
const translateMobileTwo = keyframes`
    0%,
    100% {
        transform: translate(0px, 0px) scale(1);
    }
    25% {
        transform: translate(-100px, -350px) scale(0.8);
    }
    75% {
        transform: translate(180px, -50px) scale(1.2);
    }
`;
const Section = styled.section`
    width: 100%;
    height: 100vh;
    backdrop-filter: blur(40px);
    display: flex;
    background-color: rgba(0, 0, 0, 0.408);
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    &::after {
        content: "";
        background-image: url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/662025/grain.jpg");
        background-size: cover;
        width: 100%;
        height: 100vh;
        opacity: 0.03;
        /* opacity: 5%; */
        position: absolute;
        top: 0;
        left: 0;
        z-index: -1;
    }
    & .profilePic {
        width: 200px;
        height: 200px;
        overflow: hidden;
        display: flex;
        align-items: center;
        border-radius: 50%;
    }
    & .profilePic img {
        width: 200px;
    }
    & h1 {
        font-size: 2.4rem;
    }
    & h3 {
        margin-top: 13px;
        font-weight: 300;
    }
`;
const BlobContainer = styled.div`
    width: 100%;
    height: 100vh;
    position: absolute;
    z-index: -2;
    top: 0;
    overflow: hidden;
`;
const Button = styled.a`
    background-color: #0059ff;
    border: 1px solid #0059ff;
    border-radius: 7px;
    padding: 6px 35px;
    font-size: 1rem;
    font-weight: 600;
    text-decoration: none;
    letter-spacing: 1px;
`;
const BlobOne = styled.img`
    width: 400px;
    animation: ${translateMobile} 20s infinite linear;
`;
const BlobTwo = styled.img`
    width: 400px;
    animation: ${translateMobileTwo} 20s infinite linear;
`;

const SocialLinkContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    gap: 17px;
    & .socialLink {
        width: 36px;
        height: 36px;
        background-color: #dedede;
        border-radius: 7px;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: all 0.2s;
    }
    & .socialLink:hover {
        transform: scale(1.2);
    }
    & .socialLink img {
        width: 28px;
    }
`;

function Title() {
    return (
        <>
            <Section className="TitleSection_Container">
                <figure className="profilePic">
                    <img src={profilePic} alt="" />
                </figure>
                <div>
                    <h1>Bryan Figueroa</h1>
                    <h3>Desarrolador Web</h3>
                </div>

                <SocialLinkContainer>
                    <a href="https://github.com/Brycot" className="socialLink">
                        <img src={github} alt="" />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/bryan-ismael-figueroa-quiroz-15701a228/"
                        className="socialLink"
                    >
                        <img src={linkedin} alt="" />
                    </a>
                    <a
                        href="https://twitter.com/braico_m"
                        className="socialLink"
                    >
                        <img src={twitter} alt="" />
                    </a>
                </SocialLinkContainer>

                <Button>DESCARGAR CV</Button>
            </Section>
            <BlobContainer>
                <BlobOne src={blob} alt="" />
                <BlobTwo src={blobTwo} alt="" />
            </BlobContainer>
        </>
    );
}

export default Title;
