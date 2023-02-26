import { useState } from "react"
import { ContextLeftBar } from "./ContextLeftBar"

interface Props{
    children: JSX.Element
}

export const ProviderLeftBar = ({children}:Props)=>{

    const [isCreating, setIsCreating]=useState(false)

    const handleIsCreating=(status:boolean)=>setIsCreating(status)

    return(
        <ContextLeftBar.Provider value={{isCreating, handleIsCreating}} >
            {children}
        </ContextLeftBar.Provider>
    )
}