import React from "react";

const Project = ({item, index}) => {

    return (
        <article className="project">
            <div className="overlay"></div>
            <a target="blank" href={item.link} className="style projectDesc">
                <div className="photo">
                    <div className="img-container">
                        <img src={item.image}/>
                    </div> 
                </div>
                <div className="description">
                    <h2>{item.name}</h2>
                    <p>{item.description}</p>
                </div>
            </a>
        </article>
    )
}

export default Project