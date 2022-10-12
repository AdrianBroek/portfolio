import React, {useContext, useEffect, useState} from "react"    
import StateContext from './StateContext';

//icons
import user from '../images/icons/user.png'
import phone from '../images/icons/phone.png'
import develop from '../images/icons/develop.png'
import projects from '../images/icons/setting.png'

const MainMenu = () => {
    const {active, setActive, scrollPos, activeScroll, setActiveScroll} = useContext(StateContext)
    const [rotate, setRotate] = useState('0deg')
    const [classCheck, setClassCheck] = useState()
    const [hover, setHover] = useState()
    const [borderChange, setBorderChange] = useState()
    const [changePosition, setChangePosition] = useState(false);
    const [height, setHeight] = useState()
    const [changeCheck, setChangeCheck] = useState(false)

    useEffect(() => {
        const container = document.querySelector('.item-container');
        let containerWidth = container.offsetWidth
        setHeight(containerWidth-2)
        window.addEventListener('resize', ()=> {
            const container = document.querySelector('.item-container');
            let containerWidth = container.offsetWidth
            setHeight(containerWidth-2)
        })
    }, [changePosition])

    useEffect(()=> {
        switch(activeScroll){
            case 'aboutMe':
            setRotate('0deg')
                break;
                case 'skillset':
                setRotate('90deg')
                break;
            case 'projects':
                setRotate('180deg')
                break;
            case 'contact':
                setRotate('270deg')
                break;
        }
}, [activeScroll])

    useEffect(()=> {
        scrollPos >= 300 ? setChangePosition(true) : setChangePosition(false)  
    }, [scrollPos])

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
            <div style={{height: height}} className={changePosition ? "item-container changed" : "item-container"}>
                <div style={{borderColor: borderChange}} className="subContainerHover"></div>
                <div style={{rotate: rotate}} className="subContainerPicked"></div>
                <div onMouseEnter={() => setHover('st')} onClick={(e) => activeHandler(e)} className="item st">
                    <a className="link" href='#aboutMe'>About me</a>
                </div>
                <div onMouseEnter={() => setHover('sec')} onClick={(e) => activeHandler(e)} className="item sec">
                    <a className="link" href='#contact'>Contact</a>
                </div>
                <div onMouseEnter={() => setHover('rd')} onClick={(e) => activeHandler(e)} className="item rd">
                    <a className="link" href='#skillset'>Skillset</a>
                </div>
                <div onMouseEnter={() => setHover('th')} onClick={(e) => activeHandler(e)} className="item th">
                    <a className="link" href='#projects'>Projects</a>
                </div>
                <div className="icons">
                    {classCheck == 'st' && (
                        <div className="iconContainer" >
                            <img className="icon user" src={user} />
                        </div>
                    )}
                    {classCheck == 'sec' && (
                        <div className="iconContainer" >
                            <img className="icon dev" src={phone} />
                        </div>
                    )}
                    {classCheck == 'rd' && (
                        <div className="iconContainer" >
                            <img className="icon pro" src={develop} />
                        </div>
                    )}
                    {classCheck == 'th' && (
                        <div className="iconContainer" >
                            <img className="icon phn" src={projects} />
                        </div>
                    )}
                </div>
            </div>
        </section>
    )
}

export default MainMenu
