import { HEADER_TOKEN } from '../config/config.service';
import { useMainService } from '../hooks/useDefaultService';

export const useDeleteService = ()=>{
    
    const mainService = useMainService()

    const deleteService = (url:string) =>{

        return mainService('delete', `/${url}/delete/`, {}, HEADER_TOKEN())

    }

    return deleteService

}