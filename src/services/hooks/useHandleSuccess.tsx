import { AlertModel } from "@/components"
import { updateAlert } from "@/redux/baseStates/Alert/AlertSlice"
import { updateIsLoading } from "@/redux/baseStates/CircleProgressIndicator/CircleProgressIndicator"
import { updateSectionToReload } from "@/redux/baseStates/needToReload/needToReload"
import { useDispatch } from "react-redux"

export const useHanldeSuccess = ()=>{

    const dispatch = useDispatch()

    const handleSuccess = (res:any)=>{
        
        if(res.status === 202){
            
            const alert:AlertModel = {
                isVisible: true,
                status: 'success',
                title: 'Success',
                description: res.data.msg
            }
    
            dispatch(updateAlert(alert))
        }

        if( res.status === 201 ){
            
            const alert:AlertModel = {
                isVisible: true,
                status: 'success',
                title: 'Created',
                description: res.data.msg
            }
    
            dispatch(updateAlert(alert))
        }

        if(res.status === 204){
            
            const alert:AlertModel = {
                isVisible: true,
                status: 'success',
                title: 'Deleted',
                description: 'This file was deleted successfully'
            }
            
            dispatch(updateSectionToReload(res.config.url.split('/')[3]))
            dispatch(updateAlert(alert))
        }

    }

    return handleSuccess

}