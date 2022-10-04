import React, { useEffect, useState, useContext } from "react";
import avatar from '../images/avatar/maleavatar.webp'
import StateContext from '../components/StateContext'
import { useInView } from 'react-intersection-observer';

const About = () => {
    const {scrollPos} = useContext(StateContext)
    const [words, setWords] = useState([''])
    const { ref, inView, entry } = useInView({
        /* Optional options */
        threshold: 0,

    });

    let word = 'Adrian Brożek'
    const splitedWord = word.split('')

    function addWord() {
        for(let i=0; i <= splitedWord.length+1; i++){
            setTimeout(function timer() {
                setWords(current => [...current, splitedWord[i]])
            }, i * 80);
        }
        console.log(words)
    }

    useEffect(()=> {
        setWords([''])
        addWord()
    }, [inView])

    return (
        <section ref={ref} id="aboutMe" className="aboutMe container">
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
                    <p>Hello, I'm frontend developer with almost 1 year of professional experience and about 3 years of 'hobby' expierience. </p>
                    <p>I started my web dev journey with IT technician degree in Poland, then I constantly learned new things or had fun with building my own apps.</p>
                    <p>Im currently looking forward to get hired in company that I could help with design and web apps/sites building.</p>
                    <p>"Never stop learning!"</p>
                </div>
            </div>
        </section>
    )
}

export default About