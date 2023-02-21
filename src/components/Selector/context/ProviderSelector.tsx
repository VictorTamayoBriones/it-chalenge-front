import { ContextSelector } from "./ContextSelector"
import {useState} from 'react';
import { useGetService } from "@/services/GET/getService";
import { HEADER_TOKEN } from "@/services";

interface Props{
    children: JSX.Element
}

export const ProviderSelector = ({children}:Props) =>{

    const[data, setData]=useState<any>({})
    const getService = useGetService()

    const getData = async (search:string)=>{
        await getService(`/${search}/`,{},HEADER_TOKEN())
            .then((res)=>{
                if(res.success){
                    setData(res.data)
                }
            })
    }

    return(
        <ContextSelector.Provider value={{data, getData}} >
            {children}
        </ContextSelector.Provider>
    )
}