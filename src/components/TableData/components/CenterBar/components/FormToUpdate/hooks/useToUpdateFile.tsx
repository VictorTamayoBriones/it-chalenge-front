import { HEADER_TOKEN } from '@/services';
import { usePutService } from '../../../../../../../services/PUT/putService';

export const useToUpdateFile = () =>{

    const putService = usePutService()
    
    const updateFile = (url:string, data:any)=>{
        return putService(url, data, HEADER_TOKEN())
    }

    return updateFile

}