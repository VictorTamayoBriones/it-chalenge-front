import { createContext } from 'react';

interface ContextCenterBarState{
    isCreating: boolean,
    handleIsCreating:  (status: boolean)=>void,
    isEditing: boolean,
    handleIsEditing: (status: boolean)=>void,
    fileToUpdate: any,
    handleSetFileToUpdate: (file:any)=>void
}

export const ContextCenterBar = createContext( {} as ContextCenterBarState )