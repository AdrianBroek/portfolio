import React, { useEffect, useState, useRef } from "react";
import avatar from '../images/avatar/maleavatar.webp'

const About = () => {

    const line = useRef()

    const [words, setWords] = useState([''])

    

    function addWord(){

        let word = 'Adrian Brożek'
        const splitedWord = word.split('')

        for(let i=0; i<=splitedWord.length; i++){
            setTimeout(function timer() {
                setWords(current => [...current, splitedWord[i]])
            }, i * 150);
        }
    }

    return (
        <section id="aboutMe" className="aboutMe container">
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
                    <p>"Never stop learning"</p>
                </div>
            </div>
        <button onClick={addWord} />
        </section>
    )
}

export default About