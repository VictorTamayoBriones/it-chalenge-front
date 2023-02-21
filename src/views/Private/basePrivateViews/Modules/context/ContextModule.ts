import { createContext } from 'react';

interface ContextModuleState{
    dataOfModules: any,
    getCenterBar:(id?:string)=>void,
    getDetailsRightBar:(id?:string)=>void
}

export const ContextModules = createContext( {} as ContextModuleState )
