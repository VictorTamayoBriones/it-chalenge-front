import { HEADER_TOKEN } from "@/services"
import { useGetService } from "@/services/GET/getService"
import { ConfigApi } from '../../../ConfigAPI';

export const useGetAllUsers = ()=>{
    const getService = useGetService()

    const getAllUsers = ()=>{
        return getService(ConfigApi.users.allUsers, {}, HEADER_TOKEN())
    }

    return getAllUsers
}