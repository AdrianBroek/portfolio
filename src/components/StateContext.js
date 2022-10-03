import { createContext, useState } from "react";

const StateContext = createContext()

export function StateProvider({children}){

    window.addEventListener('scroll', function(e) {
        let scroll_position = window.scrollY;
            // console.log(scroll_position)
            setScrollPos(scroll_position)
        }
    );

    const [scrollPos, setScrollPos] = useState()
    const [active, setActive] = useState(false)


    return (
        <StateContext.Provider value={{
            active,
            setActive,
            scrollPos
        }}>
            {children}
        </StateContext.Provider>
    )
}

export default StateContext