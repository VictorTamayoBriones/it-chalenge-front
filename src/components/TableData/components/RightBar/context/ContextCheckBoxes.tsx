import { createContext } from 'react';

interface ContextCheckBoxesState{
    actions: any[],
    permissions: any[],
    mountPermission: (module:string)=> Promise<void>,
    mountActions: ()=> Promise<void>
    handleCheckBoxChange: (e:React.ChangeEvent<HTMLInputElement>)=>void,
    isLoading: boolean,
    handleIsLoading: (status: boolean)=>void,
    createCheckBoxes: ()=>void,
    unMountCheckBoxes: ()=>void
}

export const ContextCheckBoxes = createContext( {} as ContextCheckBoxesState )