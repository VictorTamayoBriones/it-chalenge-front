import { useDispatch } from 'react-redux';
import { updateAlert } from '@/redux/baseStates/Alert/AlertSlice';
import { AlertModel } from '../../components/Alert/model/AlertModel';
import { updateIsLoading } from '@/redux/baseStates/CircleProgressIndicator/CircleProgressIndicator';
import { useRefreshToken } from '@/hooks';
import { BASE_URL, HEADER_TOKEN } from '../config/config.service';
import { updateDataSession } from '@/redux/baseStates/user/User';
import { useMainService } from './useDefaultService';
import axios from 'axios';
import { updateSectionToReload } from '@/redux/baseStates/needToReload/needToReload';
import { usePath } from '../../hooks/usePathName';


export const useHandleErrors = ()=>{

    const dispatch = useDispatch()
    const { PATH_NAME } = usePath()

    const dealWitherrors =(err:any)=>{
        
        if( err.response.status === 400 || err.response.status === 401 ){
            
            if(err.response.data.msg){

                const alert:AlertModel = {
                    isVisible: true,
                    status: 'error',
                    title: 'Error',
                    description: err.response.data.msg
                }
                
                dispatch(updateAlert(alert))
                dispatch(updateIsLoading(false))

            }else{
                const alert:AlertModel = {
                    isVisible: true,
                    status: 'error',
                    title: 'Error',
                    description: err.response.data.detail.msg
                }
                
                dispatch(updateAlert(alert))
                dispatch(updateIsLoading(false))
            }

            
            
        }

        if( err.response.status === 421 ){
            
            if(err.response.data.msg === 'Signature has expired'){
                
                try{
                    axios.get(`${BASE_URL}/auth/refresh`, {headers:HEADER_TOKEN('refresh_token')})
                        .then((res:any)=>{
                            if(res){
                                let dataUser = {
                                    access_token:res?.data?.data?.access_token,
                                    refresh_token:res?.data?.data?.refresh_token,
                                    role_name: res?.data?.data?.role_name,
                                    user_email: res?.data?.data?.user_email,
                                    permissions: res?.data?.data?.permissions,
                                }
                                
                                dispatch(updateDataSession(dataUser))
                                dispatch(updateSectionToReload(PATH_NAME))
                            }
                
                        }).catch(()=>{
                            sessionStorage.clear()
                            location.reload();
                        })

                }catch(e){
                    throw e
                }
                    
                dispatch(updateIsLoading(false))
            }

        }
        
        if( err.response.status === 403 ){
            
            const alert:AlertModel = {
                isVisible: true,
                status: 'error',
                title: 'Forbiden',
                description: err.response?.data?.detail.msg
            }

            dispatch(updateAlert(alert))
            dispatch(updateIsLoading(false))
        }
    
        if( err.response.status === 422 ){
            const alert:AlertModel = {
                isVisible: true,
                status: 'error',
                title: 'Error',
                description: err.response.data.detail[0].msg
            }
            
            dispatch(updateAlert(alert))
            dispatch(updateIsLoading(false))
        }
        
        if( err.response.status === 404 ){
            
            if(err.response.data.detail.msg === "Something wrong! We working in that."){
                const alert:AlertModel = {
                    isVisible: true,
                    status: 'error',
                    title: 'Error',
                    description: err.response.data.detail.msg
                }
                
                dispatch(updateAlert(alert))
                dispatch(updateIsLoading(false))
            }

        }
    }

    return{
        dealWitherrors
    }

}