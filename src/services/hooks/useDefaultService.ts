import  axios  from 'axios'
import { BASE_URL } from '../config/config.service'
import { useHandleErrors } from './useHandleErrors';
import { useHanldeSuccess } from './useHandleSuccess';

export const useMainService = () =>{

    const { dealWitherrors } = useHandleErrors();

    const handleSuccess = useHanldeSuccess()

    const mainService = async (method:string, url: string, data?:{}, headers?:{}, start:number=0, limit?:number)=>{
        return await axios({
            method: method,
            url: `${BASE_URL}${url}${start >= 0 && limit ? `?start=${start}&limit=${limit}`: ''}`,
            data: data,
            headers: headers,
        })
        .then(res=>{
            handleSuccess(res)
            return res.data
        })
        .catch(e=>{
            dealWitherrors(e)
            return e
        })
    }

    return mainService
}