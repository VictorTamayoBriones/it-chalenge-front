import { useMainService } from '../hooks/useDefaultService';

export const useGetService = ()=>{
    
    const mainService = useMainService()

    const getService = (url:string, data?:{}, headers?:{}, start?:number, limit?:number) =>{

        return mainService('get', url, data, headers, start, limit)

    }

    return getService

}