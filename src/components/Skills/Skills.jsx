import skillsArray from "../../utils/skillsArray";
import {
    SkillSection,
    Title,
    BlobContainer,
    BlobOne,
    BlobTwo,
    TechnologyContainer,
} from "./Skills.styled";

import blob from "../../assets/blobanimation.svg";
import blobTwo from "../../assets/blobanimationtwo.svg";
function Skills() {
    return (
        <SkillSection id="Skills">
            <div className="Skills__Title">
                <Title>Habilidades</Title>
            </div>
            <div className="Skills__Container">
                {skillsArray.map((skill) => (
                    <TechnologyContainer key={skill.title}>
                        <figure className="Tech__Image">
                            <img src={skill.img} alt="" />
                        </figure>
                        <p>{skill.title}</p>
                    </TechnologyContainer>
                ))}
            </div>
            <BlobContainer>
                <BlobOne src={blob} alt="" />
                <BlobTwo src={blobTwo} alt="" />
            </BlobContainer>
        </SkillSection>
    );
}

export default Skills;
