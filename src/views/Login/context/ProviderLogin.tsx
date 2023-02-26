import { ContextLogin } from "./ContextLogin"
import React, { useEffect, useState } from 'react';
import { INPUTS_TO_RENDER } from "../config";
import { ArrOfObjectsToSingleObject, verifyIsEmail } from "@/utils";
import { useDispatch } from "react-redux";
import { updateAlert } from "@/redux/baseStates/Alert/AlertSlice";
import { AlertModel } from '../../../components/Alert/model/AlertModel';
import { useLogin } from '../hooks/useLogin';

interface Props{
    children: JSX.Element
}

export const ProviderLogin = ( {children}:Props )=>{

    const login = useLogin()

    const dispatch = useDispatch()

    const data = INPUTS_TO_RENDER.map(input => ({[input.name]: input.value}))

    let INITIAL_STATE:any = ArrOfObjectsToSingleObject(data)

    const [dataLoginForm, setDataLoginForm]=useState<{}>(INITIAL_STATE)
    
    const handleInputChange = (e:React.ChangeEvent<HTMLInputElement>)=>{
        setDataLoginForm({
            ...dataLoginForm,
            [e.target.name]:e.target.value
        })
    }
    
    const handleSubmitLogin=()=>{
        
        if(Object.values(dataLoginForm).includes('')){
            const emptyFields = Object.entries(dataLoginForm).filter(item=>item[1] === '').flat().filter(item=>item!='').join().replaceAll(',', ' and ')
            
            const alert:AlertModel = {
                isVisible: true,
                status: 'error',
                title: 'Invalid Data',
                description: `Please complete all fields ${emptyFields} ${ emptyFields.includes('and') ? 'are' : 'is' } empty and should be completed.`
            }

            dispatch(updateAlert(alert))

        }else{

            const email:any =Object.entries(dataLoginForm).filter(item=>item.includes('email'))[0][1]
            const password:any =Object.entries(dataLoginForm).filter(item=>item.includes('password'))[0][1]
            
            if( verifyIsEmail(email).success ){
                
                if(password.length >= 8){

                    const dataLogin = {
                        email: email.trim(),
                        password: password.trim()
                    }

                    login(dataLogin)
                    
                }else{
                    const alert:AlertModel = {
                        isVisible: true,
                        status: 'error',
                        title: 'Invalid Data',
                        description: `The password must have 8 characters or more.`
                    }
        
                    dispatch(updateAlert(alert))    
                }

            }else{
                const alert:AlertModel = {
                    isVisible: true,
                    status: 'error',
                    title: 'Invalid Data',
                    description: verifyIsEmail(email).msg
                }
    
                dispatch(updateAlert(alert))
            }

        }
        
    }

    return(
        <ContextLogin.Provider value={{dataLoginForm, handleInputChange, handleSubmitLogin}} >
            {children}
        </ContextLogin.Provider>
    )
}