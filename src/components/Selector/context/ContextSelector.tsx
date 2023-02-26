import { createContext } from 'react';

interface ContextSelectorState{
    data: any,
    getData: (search: string)=>void
}

export const ContextSelector = createContext( {} as ContextSelectorState )