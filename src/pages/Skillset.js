import React, {useState, useEffect, useContext} from "react";
import arrow from '../images/icons/arrow.png'
import { useInView } from 'react-intersection-observer';
import StateContext from "../components/StateContext";

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
            <div className="st">
                <div className="tables">
                    <h1 className="name">Skillset</h1>
                    <div className="skill html">
                        <div className="widthChanger" style={{width: grow}}>
                            <p>HTML5</p>
                        </div>
                    </div>
                    <div className="skill css" onClick={() => setOpen4(!open4)}>
                        <div className="widthChanger" style={{width: grow}}>
                            <div className="descContainer">
                                <p>CSS</p>
                                <div className="arrowContainer">
                                    <img className={open4 ? 'open' : ''} src={arrow}/>
                                </div>
                                    {open4 && (
                                        <div className="desc">
                                            <ul>
                                                <li>Sass/Scss</li>
                                                <li>Bootstrap</li>
                                                <li>Flexbox</li>
                                                <li>Grid</li>
                                                <li>RWD</li>
                                            </ul>
                                        </div>
                                    )}
                            </div>
                        </div>
                    </div>
                    <div className="skill js">
                        
                        <div className="widthChanger" style={{width: grow}}>
                            <p>JavaScript ECMA6</p>
                        </div>
                    </div>
                    <div className="skill react" onClick={() => setOpen1(!open1)}>
                        <div className="widthChanger" style={{width: grow}}>
                            <div className="descContainer">
                                <p>React.js</p>
                                <div className="arrowContainer">
                                    <img className={open1 ? 'open' : ''} src={arrow}/>
                                </div>
                                {open1 && (
                                    <div className="desc">
                                        <ul>
                                            <li>Router</li>
                                            <li>framer-motion</li>
                                            <li>styled-components</li>
                                            <li>context</li>
                                            <li>hooks</li>
                                        </ul>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                    <div className="skill api">
                        
                        <div className="widthChanger" style={{width: grow}} onClick={() => setOpen2(!open2)}>
                            <div className="descContainer">
                                <p>REST API</p>
                                <div className="arrowContainer">
                                        <img className={open2 ? 'open' : ''} src={arrow}/>
                                    </div>
                                    {open2 && (
                                        <div className="desc">
                                            <ul>
                                                <li>Fetch</li>
                                                <li>Axios</li>
                                            </ul>
                                        </div>
                                    )}
                            </div>
                        </div>
                    </div>
                    <div className="skill node">
                        <div className="widthChanger" style={{width: grow}}>
                            <p>Node.js</p>
                        </div>
                        
                    </div>
                    <div className="skill wp">
                        <div className="widthChanger" style={{width: grow}}>
                            <p>Wordpress</p>
                        </div>
                        
                    </div>
                    <div className="skill tpl">
                        
                        <div className="widthChanger" style={{width: grow}}>
                            <p>Smarty + TPL</p>
                        </div>
                    </div>
                    <div className="skill ps">
                        
                        <div className="widthChanger" style={{width: grow}}>
                            <p>Prestashop</p>
                        </div>
                    </div>
                    <div className="skill sql">
                        
                        <div className="widthChanger" style={{width: grow}}>
                            <p>MySql</p>
                        </div>
                    </div>
                    <div className="skill php">
                        
                        <div className="widthChanger" style={{width: grow}}>
                            <p>php</p>
                        </div>
                    </div>
                    <div className="skill graph">
                        <div className="widthChanger" style={{width: grow}} onClick={() => setOpen3(!open3)}>
                            <div className="descContainer">
                                <p>GraphQl</p>
                                <div className="arrowContainer">
                                        <img className={open3 ? 'open' : ''} src={arrow}/>
                                </div>
                                {open3 && (
                                    <div className="desc">
                                        <ul>
                                            <li>HyGraph</li>
                                        </ul>
                                    </div>
                                )}
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skillset