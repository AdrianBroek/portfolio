import React, { useState, useContext, useEffect, useMemo, useCallback } from "react";
import data from '../storage/data'
import utils from '../storage/utils'
import Project from '../components/Project'
import { useInView } from 'react-intersection-observer';
import StateContext from "../components/StateContext";
import { dataTags } from "../storage/tags";
import tags from '../images/icons/tags.png'

const Projects = () => {
    const {activeScroll, setActiveScroll} = useContext(StateContext)
    // project data
    const [storage, setStorage] = useState(data)
    const [filteredStorage, setFilteredStorage] = useState([])

    const [inputText, setInputText] = useState('')

    const [tagList, setTagList] = useState(dataTags)

    const [activeTagList, setActiveTagList] = useState([])

    const [util, setUtil] = useState(utils)

    const { ref, inView,  } = useInView({
        threshold: 0.1,
    });  

    function inputHandler(e) {
        // console.log(inputText)
        setInputText(e.target.value)
    }

    function filterProjectsByTagName() {

            const objectsToRemove  = []

            // copy array of data
            const newArray = [...data]
            console.log({newArray: newArray})
            // mapuj kazdy projekt z osobna
            newArray.map((proj)=> {
                    // jesli ktorykolwiek z tagow jest w activetags, dodaj projekt
                    // jesli nie to nie dodawaj/usun
                    const tagExist = activeTagList.some(tag => proj.tags.includes(tag))
                    console.log(tagExist)
                    if(tagExist) {
                        // sprawdz czy jest w filterowanym storage juz ten obiekt
                        if (!filteredStorage.includes(proj)){
                            setFilteredStorage(state=>[...state, proj])
                        }
                    } else {
                        
                        if (filteredStorage.includes(proj)){
                            objectsToRemove.push(proj)
                        }
                    }
            })

            // if objects to remove more than 0, remove them from filteredStorage
            if(objectsToRemove.length > 0){
                let FScopy = [...filteredStorage]
                objectsToRemove.forEach((element)=> {
                    FScopy = FScopy.filter((item) => item.name != element.name);
            })
            setFilteredStorage(FScopy)
        }
    }

    // set filtered storage to data on load component
    useEffect(()=> {
        setFilteredStorage(data)
    },[])

    // setStorage if filteredStorage changes
    useEffect(()=> {
        setStorage(filteredStorage)

        if(filteredStorage.length == 0){
            setFilteredStorage(data)
        }
    },[filteredStorage])

    // fire filterProjectsByTagName function on activetaglist change
    useEffect(()=> {
        filterProjectsByTagName()
        console.log(activeTagList)
    },[activeTagList])

    // del tag on click
    const delTag = (e) => {
        // console.log(e.target.id)
        const ar = [...activeTagList]

        const newAr = ar.filter((tag)=> tag != e.target.id)
        // console.log(newAr)
        setActiveTagList(newAr)
    }

    // add tag to activetaglist on btn click if it doesnt exist already
    const submitTag = (e) => {
        e.preventDefault()
        if(inputText != '' && !activeTagList.includes(inputText)){
            setActiveTagList(state => [...state, inputText])
        }
    };

    
    useEffect(()=>{
        if(inView){
            const d = document.getElementById("projects");
            const topPos = d.offsetTop;
            // console.log(topPos)
            setActiveScroll('projects')
        }
    }, [inView])

    return (
        <section id="projects" ref={ref} className="projects container">
            <h1 className="name">Projects</h1>
            <input type="text" value={inputText} onChange={inputHandler}/>
            <button type="submit" onClick={submitTag}>DODAJ TAGA</button>
            {activeTagList.length > 0 && (
                <div className="active-tags">
                    {activeTagList.map((tag) => (
                        <p id={tag} onClick={delTag}>
                            <img  style={{filter: "invert(38%) sepia(51%) saturate(2948%) hue-rotate(176deg) brightness(91%) contrast(101%)", margin: "0 7px"}} width="15px" src={tags} />
                            {tag}
                        </p>
                    ))}
                </div>
            )}
            <div className="projectContainer">
                {storage.map((item, index)=> (
                    <Project item={item} key={index} />
                ))}
            </div>
            {/* <br />
            <br />
            <br />
            <h1 className="name">Professional projects</h1>
            <div className="projectContainer">
                {util.map((item, index)=> (
                    <Project item={item} key={index} />
                ))}
            </div> */}
        </section>
    )
}

export default Projects