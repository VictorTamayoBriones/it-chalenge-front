import { createContext } from 'react';

interface ContextRolesState{
    dataOfRoles: any,
    getCenterBar: (id?:string)=>void,
    getDetailsRightBar: (id?:string)=>void,
}

export const ContextRoles = createContext( {} as ContextRolesState )