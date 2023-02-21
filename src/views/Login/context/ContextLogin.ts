import { createContext } from "react";
import { IInputModel, ILoginData } from "../models";

interface contextLoginState{
    dataLoginForm: {},
    handleInputChange: (e:React.ChangeEvent<HTMLInputElement>)=>void,
    handleSubmitLogin: ()=>void
}

export const ContextLogin = createContext( {} as contextLoginState )