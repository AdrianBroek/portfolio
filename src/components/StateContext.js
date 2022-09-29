import { createContext, useState } from "react";

const StateContext = createContext()

export function StateProvider({children}){

    const [active, setActive] = useState(false)

    return (
        <StateContext.Provider value={{
            active,
            setActive
        }}>
            {children}
        </StateContext.Provider>
    )
}

export default StateContext