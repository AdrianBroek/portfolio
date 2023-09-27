import React, { useState } from "react";  
import skillsData from "../storage/skills";
import SkillIcon from "../components/SkillIcon";

const Skills = () => {
    const [data,SetData] = useState(skillsData)

    return (
        <section id="skills">
            <div className="info">
                <h1 className="name">Skillset</h1>
                <p>Hover for more details</p>
            </div>
            <div className="icon-container">
                {data.map((item)=> (
                    <SkillIcon props={item}/>
                ))}
            </div>
        </section>
    )

}

export default Skills