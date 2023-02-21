import { useMainService } from '../hooks/useDefaultService';

export const usePutService = ()=>{
    
    const mainService = useMainService()

    const putService = (url:string, data?:{}, headers?:{}) =>{

        return mainService('put', url, data, headers)

    }

    return putService

}