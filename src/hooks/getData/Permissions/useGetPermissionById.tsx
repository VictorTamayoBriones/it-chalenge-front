import { HEADER_TOKEN } from "@/services"
import { useGetService } from "@/services/GET/getService"
import { ConfigApi } from '../../../ConfigAPI';

export const useGetPermissionById = ()=>{

    //Get a permission by ID

    const getService = useGetService()

    const getPermissionById = (id:string) =>{
        return getService(ConfigApi.permissions.permissionsById(id), {}, HEADER_TOKEN())
    }

    return getPermissionById
}