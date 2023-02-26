import { createContext } from 'react';

interface ContextAsideState{
    menuIsOpen: boolean,
    handleMenuIsOpen: (status: boolean)=>void
}

export const ContextAside = createContext( {} as ContextAsideState )