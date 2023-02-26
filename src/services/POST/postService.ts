import { useMainService } from '../hooks/useDefaultService';

export const usePostService = ()=>{
    
    const mainService = useMainService()

    const postService = (url:string, data?:{}, headers?:{}) =>{

        return mainService('post', url, data, headers)

    }

    return postService

}