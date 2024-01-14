import React, {useState, useEffect, useContext} from "react";
import arrow from '../images/icons/arrow.png'
import { useInView } from 'react-intersection-observer';
import StateContext from "../components/StateContext";
import Skills from "./Skills";

const Skillset = () => {
    const {activeScroll, setActiveScroll} = useContext(StateContext)
    const { ref, inView, entry } = useInView({
        threshold: 0.1,
    });
    const [grow, setGrow] = useState('20%')
    const [open1, setOpen1] = useState(false)
    const [open2, setOpen2] = useState(false)
    const [open3, setOpen3] = useState(false)
    const [open4, setOpen4] = useState(false)
    
    useEffect(()=>{
        if(inView){
            const d = document.getElementById("aboutMe");
            const topPos = d.offsetTop;
            setActiveScroll('skillset')
        }
    }, [inView])

    useEffect(()=> {
        inView ? setGrow('100%') : setGrow('20%')
    }, [inView])

    
    return (
        <section id="skillset" ref={ref} className="skillset container">
            <Skills />
        </section>
    )
}

export default Skillset