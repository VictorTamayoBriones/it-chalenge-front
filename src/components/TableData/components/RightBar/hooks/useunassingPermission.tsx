import { useDeleteService } from "@/services/DELETE/deleteService"

export const useUnassingPermission = ()=>{
    
    const deleteService = useDeleteService()

    const unassingPermission=async(id:string)=>{
        await deleteService(`permissions/${id}`)
    }

    return unassingPermission
}