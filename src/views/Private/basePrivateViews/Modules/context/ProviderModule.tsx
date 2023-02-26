import { ContextModules } from "./ContextModule"
import { useState, useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { updateIsLoading } from "@/redux/baseStates/CircleProgressIndicator/CircleProgressIndicator";
import { useNavigate } from 'react-router-dom';

import { usePath } from "@/hooks/usePathName";

import { updateSectionToReload } from '@/redux/baseStates/needToReload/needToReload';
import { AppStore } from "@/redux/store";
import { useGetActionByActionId, useGetActionsByModuleId, useGetAllModules } from "@/hooks";


interface Props{
    children: JSX.Element
}

export const ProviderModule = ({children}:Props) =>{

    const dispatch = useDispatch()
    const { PANTH_BASE } = usePath()
    const navigate = useNavigate()

    const [dataOfModules, setDataOfModule]=useState<any>({}) 
    
    const toReload = useSelector((store:AppStore)=>store.toReload)
    const getAllModules = useGetAllModules()
    const getActionsByModuleId = useGetActionsByModuleId();
    const getActionByActionId = useGetActionByActionId();
    
    const getLeftBar = async (id?:string)=>{
        dispatch(updateIsLoading(true))
        if(id){
            navigate(`${id}`)        
        }
        await getAllModules()
        .then(res=>{
            if(res.success === true){

                const data = {
                    leftBar:{
                      title: 'modules',
                      childs: res.data,
                    }
                }
                setDataOfModule(data)
            }
        })
        
        dispatch(updateIsLoading(false))
    }

    const getCenterBar = (id?:string, name?:string)=>{
        dispatch(updateIsLoading(true))
        navigate(`/${PANTH_BASE}/${id}`)
        getActionsByModuleId(id)
            .then(res=>{
                if(res.success === true){
                    const dataTemp={
                        ...dataOfModules,
                        rightBar: {}       
                    }
                    const centerBar={
                      title: `actions of ${name}`,
                      childs: res.data,
                    }
                    setDataOfModule({...dataTemp, centerBar })
                }
                dispatch(updateIsLoading(false))
            })
    }

    const getDetailsRightBar = (id?:string)=>{
        dispatch(updateIsLoading(true))
        navigate(id ? id : '')
        getActionByActionId(id)
            .then(res=>{
                if(res.success === true){
                    const rightBar={
                      title: 'Details of',
                      data: res.data,
                    }
                    setDataOfModule({...dataOfModules, rightBar })
                }
                dispatch(updateIsLoading(false))
            })
    }

    useEffect(()=>{
        getLeftBar()
    }, [])

    useEffect(()=>{
        if(toReload === 'modules'){
            
            getLeftBar()
            dispatch(updateSectionToReload(''))
            
        }
    }, [toReload])

    return(
        <ContextModules.Provider value={{ dataOfModules, getCenterBar, getDetailsRightBar }} >
            {children}
        </ContextModules.Provider>
    )
}