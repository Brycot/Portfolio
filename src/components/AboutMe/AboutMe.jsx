import React from 'react';
import { Section, Title, Text } from './AboutMe.styled';

function AboutMe() {
    return (
        <Section id="AboutMe">
            <div className="AboutMe__Title">
                <Title>Sobre Mi</Title>
            </div>
            <div>
                <img
                    loading="lazy"
                    src="https://antivirusparaladesercion.com/wp-content/uploads/revslider/slider-33/sftck-mn-img01.png"
                    alt=""
                />
                <div className="AboutMe__paragraph_Container">
                    <Text>
                        Soy un individuo muy motivado y comprometido. Me
                        esfuerzo por superar continuamente mis límites para
                        alcanzar resultados sobresalientes en todo lo que hago.
                    </Text>
                    <Text>
                        Me considero una persona adaptable y capaz de trabajar
                        en diferentes entornos y situaciones, lo que me permite
                        abordar cualquier desafío que se presente con confianza
                        y eficacia.
                    </Text>
                    <Text>
                        Durante mi tiempo como desarrollador, he tenido la
                        oportunidad de trabajar en una variedad de proyectos en
                        los que he podido aprender y poner en práctica mis
                        habilidades técnicas. Soy competente en una variedad de
                        tecnologías y lenguajes de programación, incluyendo
                        React, Express, MySQL, MongoDB, PostgreeSQL y muchas
                        más.
                    </Text>
                </div>
            </div>
        </Section>
    );
}

export default AboutMe;
