import React, {useContext, useEffect, useState} from "react"    
import StateContext from './StateContext';

//icons
import user from '../images/icons/user.png'
import phone from '../images/icons/phone.png'
import develop from '../images/icons/develop.png'
import projects from '../images/icons/setting.png'

const MainMenu = () => {
    const {active, setActive} = useContext(StateContext)
    const [rotate, setRotate] = useState('0deg')
    const [classCheck, setClassCheck] = useState()
    const [hover, setHover] = useState()
    const [borderChange, setBorderChange] = useState()

    useEffect(()=> {
        switch(classCheck){
            case 'st':
                setRotate('0deg')
                break;
            case 'sec':
                setRotate('270deg')
                break;
            case 'rd':
                setRotate('90deg')
                break;
            case 'th':
                setRotate('180deg')
                break;
        }
    }, [classCheck])

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
    const [link, setLink] = useState()

    useEffect(()=> {
        console.log(link)
    }, [link])

    const linkHandler = (e) => {
        const el = document.querySelector('#aboutMe')
        setLink(e.target.parentNode.classList[1])
        console.log(link)
    }

    useEffect(() =>{      
        setBorderChange(hover)
        switch(hover) {
            case 'st':
                setBorderChange('rgba(255, 255, 255, 0.233) transparent transparent transparent')
                break;
            case 'sec':
                setBorderChange('transparent  transparent transparent rgba(255, 255, 255, 0.233)')
                break;
            case 'rd':
                setBorderChange('transparent rgba(255, 255, 255, 0.233) transparent  transparent')
                break;
            case 'th':
                setBorderChange('transparent transparent rgba(255, 255, 255, 0.233) transparent ')
                break;
        }
    }, [hover])

    return (
        <section className="menu">
            <div className="item-container">
                <div style={{borderColor: borderChange}} className="subContainerHover"></div>
                <div style={{rotate: rotate}} className="subContainerPicked"></div>
                <div onMouseEnter={() => setHover('st')} onClick={(e) => activeHandler(e)} className="item st">
                    <h1 onClick={(e) => linkHandler(e)}>About me</h1>
                </div>
                <div onMouseEnter={() => setHover('sec')} onClick={(e) => activeHandler(e)} className="item sec subActive">
                    <h1 onClick={(e) => linkHandler(e)}>Skillset</h1>
                </div>
                <div onMouseEnter={() => setHover('rd')} onClick={(e) => activeHandler(e)} className="item rd subActive">
                    <h1 onClick={(e) => linkHandler(e)}>Projects</h1>
                </div>
                <div onMouseEnter={() => setHover('th')} onClick={(e) => activeHandler(e)} className="item th active">
                    <h1 onClick={(e) => linkHandler(e)}>Contact</h1>
                </div>
                <div className="icons">
                    {classCheck == 'st' && (
                        <div className="iconContainer" >
                            <img className="icon user" src={user} />
                        </div>
                    )}
                    {classCheck == 'sec' && (
                        <div className="iconContainer" >
                            <img className="icon dev" src={develop} />
                        </div>
                    )}
                    {classCheck == 'rd' && (
                        <div className="iconContainer" >
                            <img className="icon pro" src={projects} />
                        </div>
                    )}
                    {classCheck == 'th' && (
                        <div className="iconContainer" >
                            <img className="icon phn" src={phone} />
                        </div>
                    )}
                </div>
            </div>
        </section>
    )
}

export default MainMenu
