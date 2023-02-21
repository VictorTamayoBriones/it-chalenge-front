import { useGetActionsByModuleId, useGetPermissionsById, useRefreshToken } from "@/hooks"
import { useState } from "react"
import { useParams } from "react-router-dom"
import { useUnassingPermission } from "../hooks/useunassingPermission"
import { ContextCheckBoxes } from "./ContextCheckBoxes"
import { useAssingActions } from '../hooks/useAssingActions';
import { useUpdatePermissions } from '../../../../../hooks/useUpdatePermissions';

interface Props{
    children: JSX.Element | JSX.Element []
}

export const ProviderCheckBoxes = ({children}:Props)=>{

    const {id, idContent}=useParams()
    const getPermissions = useGetPermissionsById()
    const getActions = useGetActionsByModuleId()

    const handlerRefreshToken = useRefreshToken()

    const unassingPermission =useUnassingPermission()
    const assingAction = useAssingActions()

    const [isLoading, setIsLoading]=useState<boolean>(false)
    const handleIsLoading = (status: boolean)=>setIsLoading(status)

    //Permissions del role
    const [permissions, setPermissions]=useState<any[]>([])

    //Actions del module
    const [actions, setActions]=useState<any[]>([])

    const createCheckBoxes = async ()=>{
        await mountActions()
        if(actions[0]?.name){
            await mountPermission(actions[0]?.name)
        }
    }

    const mountPermission = async (module: string)=>{
        handleIsLoading(false)
        await getPermissions(id)
            .then(res=>{
                if(res.success){
                    handlerRefreshToken()
                    // updatePermissions(res?.data?.permissions);
                    const permissionsTemp = res?.data?.permissions.filter((permission:any)=>permission?.module_name === module)
                    setPermissions(permissionsTemp)
                }
                handleIsLoading(true)
            })
    }

    const mountActions = async () =>{
        handleIsLoading(false)
        await getActions(idContent)
            .then(res=>{
                if(res.success){
                    setActions(res.data)
                }
                handleIsLoading(true)
            })  
    }

    const handleCheckBoxChange = (e:React.ChangeEvent<HTMLInputElement>) =>{
        if(!e.target.checked){
            unassingPermission(e.target.name.split('/')[0])
            createCheckBoxes()
            
        }else{
            if(id){
                assingAction(id, e.target.name.split('/')[1], '')
                createCheckBoxes()
                
            }
        }
        
    }

    const unMountCheckBoxes = () =>{
        setActions([])
        setPermissions([])
    }
    
    return(
        <ContextCheckBoxes.Provider value={{ actions, permissions, mountActions, mountPermission, handleCheckBoxChange, isLoading, handleIsLoading, createCheckBoxes, unMountCheckBoxes }} >
            {children}
        </ContextCheckBoxes.Provider>
    )
}