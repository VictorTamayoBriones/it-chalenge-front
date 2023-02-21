import { HEADER_TOKEN } from '@/services';
import { useGetService } from '../../../services/GET/getService';
import { ConfigApi } from '../../../ConfigAPI';

export const useGetActionByActionId = () =>{
    const getService = useGetService()

    const getActionByActionId = (id:string) =>{
        return getService(ConfigApi.actions.actionById(id), {}, HEADER_TOKEN())
    }

    return getActionByActionId
}