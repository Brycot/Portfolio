import React from "react";
import projectsArray from "../../utils/projectsArray"

function Projects() {
    return (
        <section>
            <h2>Proyectos</h2>
            <div>
                {projectsArray.map((project) => (
                    <div>
                        <img src={project.img} alt="" />
                        <p>{project.name}</p>
                        <a href={project.demo}>Demo</a>
                        <a href={project.git}>Codigo</a>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Projects;
