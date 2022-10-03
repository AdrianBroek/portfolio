import React, {useState, useContext, useEffect} from "react";
import StateContext from '../components/StateContext';

const Skillset = () => {
    const {scrollPos} = useContext(StateContext)
    const [grow, setGrow] = useState('20%')

    useEffect(()=> {
        // console.log(scrollPos)
        scrollPos > 1250 ? setGrow('100%') : setGrow('20%')
    }, [scrollPos])

    
    return (
        <section className="skillset container">
            <div className="st">
                <div className="tables">
                    <h1>Skillset</h1>
                    <div className="html">
                        <div className="widthChanger" style={{width: grow}}>
                            <p>HTML5</p>
                        </div>
                    </div>
                    <div className="css">
                        <div className="widthChanger" style={{width: grow}}>
                            <p>CSS/SASS</p>
                        </div>
                    </div>
                    <div className="js">
                        
                        <div className="widthChanger" style={{width: grow}}>
                            <p>JavaScript ECMA6</p>
                        </div>
                    </div>
                    <div className="react">
                        <div className="widthChanger" style={{width: grow}}>
                            <p>React.js<span> (w/ router, framer-motion, styled-components, context, hooks, axios)</span></p>

                        </div>
                    </div>
                    <div className="api">
                        
                        <div className="widthChanger" style={{width: grow}}>
                            <p>REST API</p>
                        </div>
                    </div>
                    <div className="node">
                        <div className="widthChanger" style={{width: grow}}>
                            <p>Node.js</p>
                        </div>
                        
                    </div>
                    <div className="wp">
                        <div className="widthChanger" style={{width: grow}}>
                            <p>Wordpress</p>
                        </div>
                        
                    </div>
                    <div className="tpl">
                        
                        <div className="widthChanger" style={{width: grow}}>
                            <p>Smarty + TPL</p>
                        </div>
                    </div>
                    <div className="ps">
                        
                        <div className="widthChanger" style={{width: grow}}>
                            <p>Prestashop</p>
                        </div>
                    </div>
                    <div className="sql">
                        
                        <div className="widthChanger" style={{width: grow}}>
                            <p>MySql</p>
                        </div>
                    </div>
                    <div className="php">
                        
                        <div className="widthChanger" style={{width: grow}}>
                            <p>php</p>
                        </div>
                    </div>
                    <div className="graph">
                        <div className="widthChanger" style={{width: grow}}>
                            <p>GraphQl <span>(/w hyGraph)</span></p>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skillset