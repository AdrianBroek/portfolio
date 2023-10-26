import React from "react";
import tags from '../images/icons/tags.png'

const Project = ({item, index}) => {

    return (
        <>
        {item && (
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
                <div className="tags"
                style={{display: "flex", flexWrap: "wrap"}}
                >
                {item.tags ? item.tags.map((tag)=> (
                    <p className={tag == "my-project" ? "my-project" : ""}>
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