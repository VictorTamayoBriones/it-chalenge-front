import { HEADER_TOKEN } from '@/services';
import { useGetService } from '@/services/GET/getService';
import { ConfigApi } from '../../../ConfigAPI';

export const useGetActionsByModuleId = () =>{
    
    //Get actions of specific module

    const getService = useGetService()

    const getActionsByModuleId = (id:string) =>{
        return getService(ConfigApi.modules.moduleActions(id), {}, HEADER_TOKEN())
    }

    return getActionsByModuleId
}