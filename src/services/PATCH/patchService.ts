import { useMainService } from '../hooks/useDefaultService';

export const usePatchService = ()=>{
    
    const mainService = useMainService()

    const patchService = (url:string, data?:{}, headers?:{}) =>{

        return mainService('patch', url, data, headers)

    }

    return patchService

}