import { ContextAside } from "./ContextAside"
import {useState} from 'react';

interface Props{
    children: JSX.Element
}

export const ProviderAside = ({children}:Props)=>{

    const [menuIsOpen, setMenuIsOpen]=useState(true)

    const handleMenuIsOpen=(status: boolean)=> setMenuIsOpen(status)

    return(
        <ContextAside.Provider value={{menuIsOpen, handleMenuIsOpen}} >
            {children}
        </ContextAside.Provider>
    )
}