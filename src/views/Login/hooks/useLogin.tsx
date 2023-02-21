import { usePostService } from '../../../services/POST/postService';
import { useDispatch } from 'react-redux';
import { updateDataSession } from '@/redux/baseStates/user/User';
import { useNavigate } from 'react-router-dom';
import { PRIVATE_ROUTES } from '@/models';
import { ConfigApi } from '../../../ConfigAPI';

export const useLogin = ()=>{

    const postService = usePostService()
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const login= async (data:any) =>{
        if(data){
            
            postService(ConfigApi.auth.signing, data)
            .then(res=>{
                const resAuthData = {
                    access_token: res?.data.access_token,
                    refresh_token: res?.data.refresh_token,
                    user_email: res?.data.user_email,
                    role_name: res?.data.role_name,
                    permissions: res?.data.permissions,
                    searches: res?.data.credits
                }
                
                dispatch(updateDataSession(resAuthData))

                navigate(`/${PRIVATE_ROUTES.PRIVATE}`)
            })
            
        }
    }

    return login
}