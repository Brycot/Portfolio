import skillsArray from "../../utils/skillsArray";

function Skills() {
    return (
        <section>
            <h2>Habilidades</h2>
            <div>
                {skillsArray.map((skill) => (
                    <div>
                        <img src={skill.img} alt="" />
                        <p>{skill.title}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Skills;
