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
                        Soy un desarrollador Full-Stack enfocado al Front-end
                        con una actitud positiva, con habilidades técnicas
                        sólidas y una pasión por la resolución de conflictos.
                    </Text>
                    <Text>
                        Lo que me ha permitido obtener logros en los proyectos
                        en los que he sido partícipe, como aumentar la
                        productividad y las ganancias de los clientes o empresas
                        en las que trabajado. Obteniendo promociones y roles de
                        liderazgo en entornos educativos y profesionales.
                    </Text>
                    <Text>
                        Siempre dispuesto a seguir aprendiendo, en búsqueda de
                        la siguiente oportunidad laboral que me permita seguir
                        creciendo tanto personal como laboralmente
                    </Text>
                </div>
            </div>
        </Section>
    );
}

export default AboutMe;
