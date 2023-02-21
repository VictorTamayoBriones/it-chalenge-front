import { HEADER_TOKEN } from "@/services"
import { useGetService } from "@/services/GET/getService"
import { ConfigApi } from '../../../ConfigAPI';

export const useGetAllRoles = ()=>{
    const getService = useGetService()

    const getAllRoles = ()=>{
        return getService(ConfigApi.roles.allRoles, {}, HEADER_TOKEN())
    }

    return getAllRoles
}