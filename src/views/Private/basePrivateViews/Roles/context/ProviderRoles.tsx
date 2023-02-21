import { ContextRoles } from "./ContextRoles"
import { useState, useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { usePath } from "@/hooks/usePathName";
import { useNavigate, useParams } from 'react-router-dom';
import { updateIsLoading } from "@/redux/baseStates/CircleProgressIndicator/CircleProgressIndicator";


import { useGetActionsByModuleId, useGetAllModules, useGetAllRoles } from "@/hooks";
import { AppStore } from "@/redux/store";

interface Props {
    children: JSX.Element
}

export const ProviderRoles:any = ({ children }: Props) => {

    const dispatch = useDispatch()
    const { PANTH_BASE } = usePath()
    const navigate = useNavigate()
    
    const toReload = useSelector((store:AppStore)=>store.toReload)

    const [dataOfRoles, setDataOfRoles] = useState<any>({});

    const getAllRoles = useGetAllRoles();
    const getAllModules = useGetAllModules();
    
    const getActionsByModuleId = useGetActionsByModuleId()

    const getLeftBar = async (id?: string) => {
        dispatch(updateIsLoading(true))
        if (id) {
            navigate(`${id}`)
        }
        await getAllRoles()
            .then(res => {
                if (res.success === true) {

                    const data = {
                        leftBar: {
                            title: 'roles',
                            childs: res.data,
                        }
                    }
                    setDataOfRoles(data)
                }
                dispatch(updateIsLoading(false))
            })
    }

    const getCenterBar = (id?: string, name?: string) => {
        dispatch(updateIsLoading(true))
        navigate(`/${PANTH_BASE}/${id}`)
        
        getAllModules()
            .then( res=>{
                if( res.success === true ){
                    const centerBar = {
                        title: `Modules of ${name}`,
                        childs: res.data,
                    }
                    setDataOfRoles({ ...dataOfRoles, centerBar })
                }
                dispatch(updateIsLoading(false))
            })
    }

    const getDetailsRightBar = (id?: string, name?:string) => {
        dispatch(updateIsLoading(true))
        navigate(id ? id : '')
        getActionsByModuleId(id)
            .then(res => {
                if (res.success === true) {
                    const rightBar = {
                        title: `Actions of ${name}` ,
                        data: res.data,
                    }
                    setDataOfRoles({ ...dataOfRoles, rightBar })
                }
                dispatch(updateIsLoading(false))
            })
    }

    useEffect(() => {
        getLeftBar()
    }, [])

    useEffect(() => {
        if(toReload === 'roles'){
            getLeftBar()
        }
    }, [toReload])

    return (
        <ContextRoles.Provider value={{ dataOfRoles, getCenterBar, getDetailsRightBar }} >
            {children}
        </ContextRoles.Provider>
    )
}