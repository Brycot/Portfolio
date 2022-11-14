import React from "react";
import { Section, Title, Text } from "./AboutMe.styled";

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
                        Desarrollador Web enfocado en el frontend, me encanta
                        desarrollar proyectos que me lleven a ser un mejor
                        programador.
                    </Text>
                    <Text>
                        Apasionado completamente por la programación, explorando
                        cada día aprender más, siempre diespuesto a adentrarme
                        en la solución de problemas que se me presenten en el
                        día a día, buscando oportunidades que hagan crecer mis
                        habilidades.
                    </Text>
                    <Text>
                        Me encanta Trabajar en equipo y el aprendizaje
                        autodidacta acompañado de practica
                    </Text>
                </div>
            </div>
        </Section>
    );
}

export default AboutMe;
