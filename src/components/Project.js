import React, {useEffect, useState} from "react";
import tags from '../images/icons/tags.png'
import {motion} from 'framer-motion'

const Project = ({item, index}) => {
    const [hovered, setHovered] = useState(false);
    useEffect(()=> {
        console.log(hovered)
    } , [hovered])
    return (
        <>
        {item && (
        <article className="project"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            {/* <div className="overlay"></div> */}
            <a target="blank" href={item.link} className="style projectDesc">
                <div className="photo">
                    <div className="img-container">
                        <img src={item.image}/>
                    </div> 
                </div>
                <motion.div 
                animate={{
                    height: hovered ? "auto" : "150px",
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="description">
                    <h2>{item.name}</h2>
                    <p>{item.description}</p>
                </motion.div>
                <div className="tags"
                style={{display: "flex", flexWrap: "wrap"}}
                >
                {item.tags ? item.tags.map((tag, index)=> (
                    <p key={index} className={tag == "my-project" ? "my-project" : ""}>
                        <img style={{filter: "invert(38%) sepia(51%) saturate(2948%) hue-rotate(176deg) brightness(91%) contrast(101%)", margin: "0 7px"}} width="18px" src={tags} />
                        {tag}
                    </p>
                )) : ""}
                </div>
            </a>
        </article>
        )}
        </>
    )
}

export default Project