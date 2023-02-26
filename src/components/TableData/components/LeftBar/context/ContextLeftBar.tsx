import { createContext } from 'react';

interface ContextLeftBarState{
    isCreating: boolean,
    handleIsCreating: (status:boolean)=>void
} 

export const ContextLeftBar = createContext( {} as ContextLeftBarState )