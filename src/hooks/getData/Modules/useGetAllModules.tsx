import { useGetService } from "@/services/GET/getService"
import { HEADER_TOKEN } from '../../../services/config/config.service';
import { ConfigApi } from '../../../ConfigAPI';

export const useGetAllModules=()=>{
    
    const getService = useGetService()

    const getAllModules = () =>{
        return getService(ConfigApi.modules.allModulos, {}, HEADER_TOKEN())
    }

    return getAllModules
}