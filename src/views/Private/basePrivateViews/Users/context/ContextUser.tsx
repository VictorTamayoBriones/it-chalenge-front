import { createContext } from 'react';

interface ContextUserState{
    allUsers: any[],
    searchInput: string,
    handleChangeSearchInput: (e:React.ChangeEvent<HTMLInputElement>)=>void,
    isCreating: boolean,
    handleIsCreating: (status: boolean)=>void,
    mountUsers: ()=>Promise<void>,
    isEditing: boolean,
    handleIsEditing: (status: boolean, data?:any)=>void,
    userToUpdate: any,
    isUpdatingPassword: boolean,
    handleIsUpdatingPassword: (status: boolean, data?:{})=>void
}

export const ContextUser = createContext( {} as ContextUserState )