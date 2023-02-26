import { HEADER_TOKEN } from "@/services"
import { useGetService } from "@/services/GET/getService"
import { ConfigApi } from '../../../ConfigAPI';

export const useGetPermissionsById = () =>{

    //Get permissions of role by role ID

    const getService = useGetService()

    const getPermissionsById = (id:string) =>{
        return getService(ConfigApi.roles.roleWithPermissions(id), {}, HEADER_TOKEN())
    }

    return getPermissionsById
}