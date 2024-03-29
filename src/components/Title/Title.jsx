import React from 'react';

import {
    Section,
    BlobContainer,
    Button,
    SocialLinkContainer,
    BlobOne,
    BlobTwo,
} from './Title.styled';

import blob from '../../assets/blobanimation.svg';
import blobTwo from '../../assets/blobanimationtwo.svg';
import github from '../../assets/github.svg';
import linkedin from '../../assets/linkedin.svg';
import twitter from '../../assets/twitter.svg';
import profilePic from '../../assets/profilePic.webp';
import scroll from '../../assets/desplazarse-hacia-abajo.png';

function Title() {
    return (
        <>
            <Section id="beginning" className="TitleSection_Container">
                <figure className="profilePic">
                    <img src="https://i.imgur.com/dy4MgVI.jpg" alt="" />
                </figure>
                <div>
                    <h1>Bryan Figueroa</h1>
                    <h3>Desarrollador Fron-end</h3>
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

                <Button
                    href="https://drive.google.com/file/d/14VU3uLD-r9lMGijEmaBVnKV3Lbm8FBTx/view?usp=sharing"
                    target="_blank"
                >
                    DESCARGAR CV
                </Button>
                <img className="scrollimg" src={scroll} alt="" />
            </Section>
            <BlobContainer>
                <BlobOne src={blob} alt="" />
                <BlobTwo src={blobTwo} alt="" />
            </BlobContainer>
        </>
    );
}

export default Title;
