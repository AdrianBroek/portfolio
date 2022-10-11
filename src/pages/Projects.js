import React, { useState, useContext, useEffect } from "react";
import data from '../data'
import utils from '../utils'
import Project from '../components/Project'
import { useInView } from 'react-intersection-observer';
import StateContext from "../components/StateContext";

const Projects = () => {
    const {activeScroll, setActiveScroll} = useContext(StateContext)
    const [storage, setStorage] = useState(data)
    const [util, setUtil] = useState(utils)
    const { ref, inView,  } = useInView({
        threshold: 0.1,
    });
    
    useEffect(()=>{
        if(inView){
            const d = document.getElementById("projects");
            const topPos = d.offsetTop;
            // console.log(topPos)
            setActiveScroll('projects')
        }
    }, [inView])

    return (
        <section id="projects" ref={ref} className="projects container">
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