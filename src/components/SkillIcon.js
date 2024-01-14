import React, { useEffect, useState } from "react";  
import { motion, AnimatePresence } from "framer-motion";

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
        
        <div 
        
        style={active && active.activeId === skillId ? {zIndex: 2} : {zIndex: 1}}
        id={props.name} 
        onMouseOver={()=>hoverHandler(props.name)} 
        onMouseLeave={()=>setActive({activeId: '', active: false})} 
        // onClick={()=>hoverHandler(props.name)} 
        className="skill-icon">
            <img src={props.icon} />
            <AnimatePresence>
            {active && active.activeId === skillId && (
                <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                style={active && active.activeId === skillId ? {opacity: 1} : {opacity: 0}}
                className="skill-popup">
                    <h3>
                    {props.name}
                    </h3>
                    {props.info? 
                    <p>
                    {props.info}
                    </p>
                    :""}
                </motion.div>
            )}
            </AnimatePresence>
        </div>
    )

}

export default SkillIcon