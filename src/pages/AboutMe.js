import React, { useContext, useEffect, useState } from "react";
import avatar from '../images/avatar/maleavatar.webp'
import { useInView } from 'react-intersection-observer';
import StateContext from "../components/StateContext";
// 3D
import ThreeDModel from "../components/3d";

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
                }, i * 40);
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
                    <p>I’m a frontend developer with experience in React, TypeScript, Redux, and Styled Components. I’ve worked on a variety of projects that expanded my skills in creating modern web applications. I spent a year working as a Junior Frontend Developer, where I worked mainly with WordPress, SCSS optimization, writing events in jQuery, handling Prestashop templates, and validating data on React-based websites.</p>
                    <div className="horizontal" />
                    <p>One of my larger projects was an e-commerce application that included user registration/login, shopping cart management, order simulation, and a commenting system for posts on a built-in blog. This project uses Local Storage to simulate a database. I also implemented a guest checkout feature, which added flexibility to the user experience.</p>
                    <div className="horizontal" />
                    <p>In my work, I built a tool using React and TypeScript to automate product pricing in our company. The app integrates with Firebase to allow Google login and quickly matches products to pricing tiers, significantly improving price management.</p>
                    <div className="horizontal" />
                    <p>I also worked on a project using GraphQL, where I created a dynamic website for a client. Data such as images, texts, and videos are automatically updated from Hygraph. Additionally, I have basic knowledge in PHP, SQL, and database relationships, which helps when working on applications that require structured data.</p>
                    <div className="horizontal" />
                    <p>Apart from frontend, I have basic knowledge of algorithms, Python, and C++, and thanks to my computer science studies, I’ve developed some mathematical foundation that comes in handy when working on more complex projects. I’m constantly improving my skills, expanding my knowledge, and looking for new challenges in the frontend world.</p>
                    <div className="horizontal" />
                    <p><b>"Never stop learning!"</b></p>
                </div>
            </div>
            {/* <ThreeDModel /> */}
        </section>
    )
}

export default About