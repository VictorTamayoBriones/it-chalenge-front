import { ContextProfile } from './ContextProfile';
import React, { useState } from 'react';
import { ArrOfObjectsToSingleObject, verifyIsEmail } from "@/utils";
import { useDispatch } from "react-redux";
import { updateAlert } from "@/redux/baseStates/Alert/AlertSlice";
import { INPUTS_TO_RENDER } from "../FormToUpdatePassword/config";
import { AlertModel } from "@/components";

import { HEADER_TOKEN } from "@/services";
import { usePatchService } from '@/services/PATCH/patchService';


interface Props{
    children: JSX.Element
}

export const ProviderProfile = ( {children}:Props )=>{

    const patchService = usePatchService()

    const dispatch = useDispatch()

    const data = INPUTS_TO_RENDER.map(input => ({[input.name]: input.value}))

    let INITIAL_STATE:any = ArrOfObjectsToSingleObject(data)

    const [dataProfileForm, setDataProfileForm]=useState<{}>(INITIAL_STATE)
    
    const handleInputChange = (e:React.ChangeEvent<HTMLInputElement>)=>{
        setDataProfileForm({
            ...dataProfileForm,
            [e.target.name]:e.target.value
        })
    }
    
    const handleSubmitLogin=()=>{
        
        if(Object.values(dataProfileForm).includes('')){
            const emptyFields = Object.entries(dataProfileForm).filter(item=>item[1] === '').flat().filter(item=>item!='').join().replaceAll(',', ' and ')
            
            const alert:AlertModel = {
                isVisible: true,
                status: 'error',
                title: 'Invalid Data',
                description: `Please complete all fields ${emptyFields} ${ emptyFields.includes('and') ? 'are' : 'is' } empty and should be completed.`
            }

            dispatch(updateAlert(alert))

        }else{

            const actualPassword:any =Object.entries(dataProfileForm).filter(item=>item.includes('actual_password'))[0][1]
            const newPassword:any =Object.entries(dataProfileForm).filter(item=>item.includes('new_password'))[0][1]
            const confirmPassword:any =Object.entries(dataProfileForm).filter(item=>item.includes('confirm_password'))[0][1]

            if(actualPassword.length >= 8){

                if(newPassword >= 8){

                    if(confirmPassword >= 8){
                        
                        const data = {
                            actual_password: actualPassword,
                            new_password: newPassword,
                            confirm_password: confirmPassword
                        }

                        patchService('/profile/update/password', data, HEADER_TOKEN())

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
                        description: `The password must have 8 characters or more.`
                    }
                
                    dispatch(updateAlert(alert))    
                }
            
                
            }else{
                const alert:AlertModel = {
                    isVisible: true,
                    status: 'error',
                    title: 'Invalid Data',
                    description: `The password must have 8 characters or more.`
                }
    
                dispatch(updateAlert(alert))    
            }
            

        }
        
    }

    return(
        <ContextProfile.Provider value={{dataProfileForm, handleInputChange, handleSubmitLogin}} >
            {children}
        </ContextProfile.Provider>
    )
}