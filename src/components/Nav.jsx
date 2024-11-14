import React, {useContext, useEffect, useState} from "react"    
import StateContext from './StateContext';

export default function Nav() {
    const {active, setActive, scrollPos, activeScroll, setActiveScroll} = useContext(StateContext);
    const [classCheck, setClassCheck] = useState();
    const activeHandler = (e) => {
        setClassCheck(e.target.parentNode.classList[1])
        if (active){
            setActive(false)
            setTimeout(()=> {
                setActive(true)
                
            }, [])
        }else {
            setActive(true)
        }
    }

    return (
        <section id="nav" className="style">
            <ul>
                <li>
                    <div  onClick={(e) => activeHandler(e)} className="item st">
                        <a className="link" href='#aboutMe'>About me</a>
                    </div>
                </li>
                
                <li>
                    <div  onClick={(e) => activeHandler(e)} className="item sec">
                        <a className="link" href='#contact'>Contact</a>
                    </div>
                </li>
                
                <li>
                    <div  onClick={(e) => activeHandler(e)} className="item rd">
                        <a className="link" href='#skillset'>Skillset</a>
                    </div>
                </li>
                
                <li>
                    <div  onClick={(e) => activeHandler(e)} className="item th">
                        <a className="link" href='#projects'>Projects</a>
                    </div>
                </li>
            </ul>
        </section>
    )
} 