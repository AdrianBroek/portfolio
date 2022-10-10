import React, { useContext, useEffect, useState } from "react";
import avatar from '../images/avatar/maleavatar.webp'
import { useInView } from 'react-intersection-observer';
import StateContext from "../components/StateContext";

const About = () => {
    const {activeScroll, setActiveScroll} = useContext(StateContext)
    const [words, setWords] = useState([])
    const { ref, inView,  } = useInView({
        threshold: 0,
    });

    // console.log(inView)
    useEffect(()=>{
        if(inView){
            const d = document.getElementById("aboutMe");
            const topPos = d.offsetTop;
            // console.log(topPos)
            setActiveScroll('aboutMe')
            // console.log(activeScroll)
        }
    }, [inView])
    
    let word = 'Adrian Brożek'
    const splitedWord = word.split('')

    function addWord() {
        if (words.length < 1){
            for(let i=0; i < splitedWord.length; i++){
                setTimeout(function timer() {
                    setWords(current => [...current, splitedWord[i]])
                }, i * 80);
            }
        }
    }
    
    useEffect(()=> {
        inView ? addWord() : setWords([])
    }, [inView])

    return (
        <section ref={ref} id="aboutMe" className="aboutMe container style">
            <div className="st">
                <div>
                    <h2>Hi, my name is</h2>
                    <div className="name">
                        <h1>{words}<span className="cursor-block"></span></h1>
                    </div>
                    <h3>Frontend developer</h3>
                </div>
            </div>
            <div className="sec">
                <div className="img">
                    <img src={avatar}/>
                </div>
            </div>
            <div className="rd">
                <div className="board">
                    <p><span>Short:</span> Hello, I'm frontend developer with almost 1 year of professional experience and about 3 years of formal/self taught expierience. </p>
                    <p><span>Bio:</span> I started my web dev journey with IT technician degree in Poland, then I constantly gained new skills from online 
                        courses. Meanwhile I've been practising my skills by building wep apps on my own.</p>
                    <p>Im currently looking forward to get hired in company that I could help with design and web apps/sites building
                        and where I could increase my skills.</p>
                    <p><span>Motto:</span> "Never stop learning!"</p>
                </div>
            </div>
        </section>
    )
}

export default About