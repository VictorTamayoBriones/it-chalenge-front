import { createContext } from "react";

interface contextLoginState{
    dataProfileForm: {},
    handleInputChange: (e:React.ChangeEvent<HTMLInputElement>)=>void,
    handleSubmitLogin: ()=>void
}

export const ContextProfile = createContext( {} as contextLoginState )