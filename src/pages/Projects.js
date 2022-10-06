import React, { useState } from "react";
import data from '../data'
import utils from '../utils'
import Project from '../components/Project'

const Projects = () => {
    const [storage, setStorage] = useState(data)
    const [util, setUtil] = useState(utils)

    return (
        <section className="projects container">
            <h1 className="name">Projects</h1>
            <div className="projectContainer">
                {storage.map((item, index)=> (
                    <Project item={item} key={index} />
                ))}
            </div>
            <br />
            <br />
            <br />
            <h1 className="name">Professional projects</h1>
            <div className="projectContainer">
                {util.map((item, index)=> (
                    <Project item={item} key={index} />
                ))}
            </div>
        </section>
    )

}

export default Projects