import { useDispatch } from 'react-redux';
import { updateDataSession } from "@/redux/baseStates/user/User";
import { useMainService } from '../services/hooks/useDefaultService';
import { HEADER_TOKEN } from '@/services';
import { ConfigApi } from '../ConfigAPI';



export const useRefreshToken=()=>{

    const mainService = useMainService()

    const dispatch = useDispatch();

    const handlerRefreshToken = async ()=>{
        await mainService('get', ConfigApi.auth.refresh,{}, HEADER_TOKEN('refresh_token'))
        .then((res:any)=>{
            
            if(res){
                let dataUser = {
                    access_token:res?.data.access_token,
                    refresh_token:res?.data.refresh_token,
                    role_name: res?.data.role_name,
                    user_email: res?.data.user_email,
                    permissions: res?.data.permissions,
                }
                
                dispatch(updateDataSession(dataUser))
            }

        })
    }

    return handlerRefreshToken
}