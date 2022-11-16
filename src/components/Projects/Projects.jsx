import React from "react";
import projectsArray from "../../utils/projectsArray";
import { Section, Title, ProjectContainer, Button } from "./Proyects.styled";
function Projects() {
    return (
        <Section id="Projects">
            <div className="Projects__Title">
                <Title>Proyectos</Title>
            </div>
            <div className="Projects__Container">
                {projectsArray.map((project) => (
                    <ProjectContainer>
                        <p>{project.name}</p>
                        <div className="Project__Image">
                            {/* <div>
                                <a href="">Ver Mas...</a>
                            </div> */}
                            <img src={project.img} alt="" />
                        </div>
                        <div className="Project__Links">
                            <Button href={project.demo}>Demo</Button>
                            <Button href={project.git}>Codigo</Button>
                        </div>
                    </ProjectContainer>
                ))}
            </div>
        </Section>
    );
}

export default Projects;
