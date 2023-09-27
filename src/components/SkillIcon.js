import React, { useEffect, useState } from "react";  

const SkillIcon = ({props}) => {
    let skillId = props.name;
    const [active, setActive] = useState({
        activeId: '',
        active: false
    })

    function hoverHandler (id){
        setActive({
            activeId: id,
            active: true
        })
    }

    useEffect(()=> {
        // console.log(active)
    }, [active])
    // opacity: 0;
    return (
        <>
        <div 
        style={active && active.activeId === skillId ? {zIndex: 2} : {zIndex: 1}}
        id={props.name} 
        onMouseOver={()=>hoverHandler(props.name)} 
        onMouseLeave={()=>setActive({activeId: '', active: false})} 
        // onClick={()=>hoverHandler(props.name)} 
        className="skill-icon">
            <img src={props.icon} />
            {active && active.activeId === skillId && (
            <div 
            style={active && active.activeId === skillId ? {opacity: 1} : {opacity: 0}}
            className="skill-popup">
                <h3>
                {props.name}
                </h3>
                <p>
                {props.info}
                </p>
            </div>
        )}
        </div>
        
        </>
    )

}

export default SkillIcon