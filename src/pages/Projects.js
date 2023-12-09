import React, { useState, useContext, useEffect, useMemo, useCallback } from "react";
import data from '../storage/data'
import utils from '../storage/utils'
import Project from '../components/Project'
import { useInView } from 'react-intersection-observer';
import StateContext from "../components/StateContext";
import { dataTags } from "../storage/tags";
import tags from '../images/icons/tags.png'
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import ClearIcon from '@mui/icons-material/Clear';
import { IconButton } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';

const Projects = () => {
    const {activeScroll, setActiveScroll} = useContext(StateContext)
    // project data
    const [storage, setStorage] = useState(data)
    const [filteredStorage, setFilteredStorage] = useState([])

    const [inputText, setInputText] = useState('')
    const [suggestedTag, setSuggestedTag] = useState('')

    const [tagList, setTagList] = useState(dataTags)

    const [activeTagList, setActiveTagList] = useState([])

    const [activeSearch, setActiveSearch] = useState(false)

    const [util, setUtil] = useState(utils)

    const { ref, inView,  } = useInView({
        threshold: 0.1,
    });  

    function inputHandler(e) {
        const inputValue = e.target.value;
        setInputText(inputValue);
    
        if (inputValue) {
            const matchingTags = dataTags.filter(tag => tag.includes(inputValue));
    
            if (matchingTags.length > 0) {
                const suggestedTag = matchingTags[0];
                setSuggestedTag(suggestedTag);
                // Tutaj możesz zrobić coś z sugerowanym tagiem, np. przypisać go do stanu, itp.
            } else {
                setSuggestedTag('')
            }
        }else {
            setSuggestedTag('')
        }
    }
    

    function filterProjectsByTagName() {
        const objectsToRemove  = []

        // copy array of data
        const newArray = [...data]
        // mapuj kazdy projekt z osobna
        newArray.map((proj)=> {
                // jesli ktorykolwiek z tagow jest w activetags, dodaj projekt
                // jesli nie to nie dodawaj/usun
                const tagExist = activeTagList.every(tag => proj.tags.includes(tag))
                // console.log(tagExist)
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

    // setStorage if filteredStorage changes
    useEffect(()=> {
        setStorage(filteredStorage)
        // console.log(filteredStorage)
    },[filteredStorage])

    // fire filterProjectsByTagName function on activetaglist change
    useEffect(()=> {
        filterProjectsByTagName()
        // console.log(activeTagList)
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
        if(inputText != '' && !activeTagList.includes(inputText) && dataTags.includes(inputText)){
            setActiveTagList(state => [...state, inputText])
        }
    };

    // add tag from board to activetaglist on btn click if it doesnt exist already
    const pickTag = (e) => {
        if(!activeTagList.includes(e.target.id)){
            setActiveTagList(state => [...state, e.target.id])
            // console.log(e.target.id)
        }else if (activeTagList.includes(e.target.id)){
            delTag(e)
        }
    }

    // clear searchtag input
    const clearInput = (e) => {
        setInputText('')
        setSuggestedTag('')
        setActiveSearch(false)
    }
    
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
            <div className="active-tags">
            {activeTagList.length > 0 && (
                <>
                {activeTagList.map((tag) => (
                    <p id={tag} onClick={delTag} className={activeTagList.includes(tag) ? "active" : ""}>
                        <img style={{filter: "invert(38%) sepia(51%) saturate(2948%) hue-rotate(176deg) brightness(91%) contrast(101%)", margin: "0 7px"}} width="15px" src={tags} />
                        {tag}
                    </p>
                ))}
                </>
            )}
            </div>
            <div className="search-tags-container">
                <div className="suggestedTag">{suggestedTag}</div>
                <TextField 
                    onFocus={()=>setActiveSearch(true)}
                    inputProps={{ style: { color: "#fff", border: "#fff" } }} 
                    value={inputText} onChange={inputHandler} label="Filter by tag" variant="outlined" 
                    sx={{
                        width: 300,
                        '& .Mui-focused': {
                            color: '#fff',
                            border: "#fff"
                        },
                        '& .MuiInputBase-input': {
                            color: '#fff',
                        },
                        '& fieldset.MuiOutlinedInput-notchedOutline': {
                            color: '#fff',
                            borderColor: "#fff"
                        },
                        '& .MuiInputLabel-formControl': {
                            color: '#fff',
                        },
                        '& input:hover': {
                            borderColor: "#fff"
                        }
                    }}
                    InputProps={{
                        endAdornment: inputText.length > 0 ? (
                        <InputAdornment position="end">
                            <IconButton onClick={clearInput} edge="end">
                            <ClearIcon />
                            </IconButton>
                        </InputAdornment>
                        ) : null
                    }}
                />
                <IconButton className="addTag" type="submit" onClick={submitTag} aria-label="addTag">
                    <AddIcon />
                </IconButton>
                <div className="search">
                    {dataTags.length > 0  && activeSearch && (
                    <div className="tags">
                        {dataTags.map((tag) => (
                            <p id={tag} onClick={pickTag} className={activeTagList.includes(tag) ? 'active' : ""}>
                                <img  style={{filter: "invert(38%) sepia(51%) saturate(2948%) hue-rotate(176deg) brightness(91%) contrast(101%)", margin: "0 7px"}} width="15px" src={tags} />
                                {tag}
                            </p>
                        ))}
                    </div>
                    )}
                </div>
            </div>

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