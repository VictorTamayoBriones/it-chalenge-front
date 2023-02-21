import { ContextCenterBar } from "./ContextCenterBar"
import {useState} from 'react';

interface Props{
    children: JSX.Element
}

export const ProviderCenterBar = ({children}:Props) =>{

    const [isCreating, setIsCreating]=useState(false)

    const handleIsCreating = (status: boolean)=> setIsCreating(status)

    const [isEditing, setIsEditing]=useState(false)

    const handleIsEditing = (status: boolean)=> setIsEditing(status)

    const [fileToUpdate, setFileToUpdate]=useState<any>({})

    const handleSetFileToUpdate =(file:any)=>setFileToUpdate(file)

    return(
        <ContextCenterBar.Provider value={{isCreating, handleIsCreating, isEditing, handleIsEditing, fileToUpdate, handleSetFileToUpdate}} >
            {children}
        </ContextCenterBar.Provider>
    )
}